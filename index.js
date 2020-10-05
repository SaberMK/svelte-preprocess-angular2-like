const path = require('path');
import { readFile } from 'fs';

const read_text = filename => new Promise(res => readFile(filename, (err, data) => (err ? res(null) : res(data.toString()))));

export default () => ({
	transform(code, id) {
        const extension = id.endsWith('.svelte');
        if(extension) {
            const filename = path.parse(id).name;
            
            const dirpath = path.parse(id).dir;
            
            const possibleHtml = `${dirpath}\\${filename}.html`;
            const possibleScss = `${dirpath}\\${filename}.scss`;
            
            return Promise
                .all([possibleHtml, possibleScss]
                .map(read_text))
                .then(([html, scss]) => {

                    if(html) {
                        this.addWatchFile(html);
                        code+=`\n${html}\n`;
                    }

                    if(scss) {
                        this.addWatchFile(scss);
                        code += `\n<style type="text/scss">\n${scss}\n</style>\n`;
                    }
                    
                    return code;
            })
        }
	},
});