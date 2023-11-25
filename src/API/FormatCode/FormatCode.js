import prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";

const getProps = (lang)=>{
    const language = lang.toLowerCase();
    
    const langParseMap = [
        {
            language: 'javascript',
            parser: 'babel',
            plugins: [prettierPluginBabel, prettierPluginEstree]
        },
        {
            language: 'typescript',
            parser: 'typescript'
        },
        {
            language: 'html',
            parser: 'html'
        },
        {
            language: 'angular',
            parser: 'angular'
        },
        {
            language: 'vue',
            parser: 'vue'
        },
        {
            language: 'css',
            parser: 'css'
        },
        {
            language: 'scss',
            parser: 'scss'
        },
        {
            language: 'less',
            parser: 'less'
        },
        {
            language: 'json',
            parser: 'json'
        },
        {
            language: 'yaml',
            parser: 'yaml'
        },
        {
            language: 'markdown',
            parser: 'markdown'
        },
        {
            language: 'json',
            parser: 'json'
        },
        {
            language: 'graphql',
            parser: 'graphql'
        },
        {
            language: 'stringifiedjson',
            parser: 'json-stringify'
        }
    ];
    const index = langParseMap.findIndex(item=>item.language === language);
    if(index === -1){
        throw new Error('unsupported language');
    }
    return langParseMap[index];
}
export default async function formatCode(unformattedCode, language){
    try{
        const {parser, plugin} = getProps(language);
        console.log({parser, plugin});
        const formattedCode = await prettier.format(unformattedCode,{parser, plugins: [plugin, prettierPluginEstree]});
        return formattedCode;
    }catch(error){
        console.log(error);
        return unformattedCode;
    }
}