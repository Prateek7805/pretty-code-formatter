import prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import prettierPluginTypescipt from "prettier/plugins/typescript";
import prettierPluginHtml from "prettier/plugins/html";
import prettierPluginCss from "prettier/plugins/postcss";
import xmlFormatter from "xml-formatter";
import prettierPluginGraphql from 'prettier/plugins/graphql';
import beautify from 'js-beautify'
export const langParseMap = [
    {
        language: 'Javascript',
        parser: 'babel',
        highlighted: 'Javascript',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'Typescript',
        parser: 'typescript',
        highlighted: 'Typescript',
        plugins: [prettierPluginTypescipt, prettierPluginEstree]
    },
    {
        language: 'React',
        parser: 'typescript',
        highlighted: 'Typescript',
        plugins: [prettierPluginTypescipt, prettierPluginEstree]
    },
    {
        language: 'HTML',
        parser: 'html',
        highlighted: 'HTML',
        plugins: []
    },
    {
        language: 'Angular',
        parser: 'typescript',
        highlighted: 'typescript',
        plugins: [prettierPluginTypescipt, prettierPluginEstree]
    },
    {
        language: 'Vue',
        parser: 'html',
        highlighted: 'Javascript',
        plugins: [prettierPluginHtml, prettierPluginEstree]
    },
    {
        language: 'CSS',
        parser: 'css',
        highlighted: 'CSS',
        plugins: [prettierPluginCss]
    },
    {
        language: 'SCSS',
        parser: 'scss',
        highlighted: 'SCSS',
        plugins: [prettierPluginCss]
    },
    {
        language: 'Less',
        parser: 'less',
        highlighted: 'Less',
        plugins: [prettierPluginCss]
    },
    {
        language: 'JSON',
        parser: 'json',
        highlighted: 'JSON',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'XML',
        parser: 'XML',
        highlighted: 'XML',
        plugins: []
    },
    {
        language: 'Graphql',
        parser: 'graphql',
        highlighted: 'Graphql',
        plugins: [prettierPluginGraphql]
    }
];

const getProps = (language) => {
    const index = langParseMap.findIndex(item => item.language === language);
    if (index === -1) {
        throw new Error('unsupported language');
    }
    return langParseMap[index];
}

export default async function formatCode(unformattedCode, language) {
    const { parser, plugins } = getProps(language);
    if (parser === 'XML') {
        const formattedCode = xmlFormatter(unformattedCode);
        return formattedCode;
    }
    if(parser === 'html'){
        const formattedCode = beautify.html(unformattedCode, {
            indent_size: 2, // Adjust the indent size as needed
          });
        return formattedCode;
    }
    const formattedCode = await prettier.format(unformattedCode, { parser, plugins: plugins });
    return formattedCode;
};