import prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import prettierPluginTypescipt from "prettier/plugins/typescript";
import prettierPluginHtml from "prettier/plugins/html";
import prettierPluginCss from "prettier/plugins/postcss";
import xmlFormatter from "xml-formatter";
import prettierPluginGraphql from 'prettier/plugins/graphql';
export const langParseMap = [
    {
        language: 'Javascript',
        parser: 'babel',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'Typescript',
        parser: 'typescript',
        plugins: [prettierPluginTypescipt, prettierPluginEstree]
    },
    {
        language: 'React',
        parser: 'babel',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'HTML',
        parser: 'html',
        plugins: [prettierPluginHtml, prettierPluginEstree]
    },
    {
        language: 'Angular',
        parser: 'babel',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'Vue',
        parser: 'html',
        plugins: [prettierPluginHtml, prettierPluginEstree]
    },
    {
        language: 'CSS',
        parser: 'css',
        plugins: [prettierPluginCss]
    },
    {
        language: 'SCSS',
        parser: 'scss',
        plugins: [prettierPluginCss]
    },
    {
        language: 'Less',
        parser: 'less',
        plugins: [prettierPluginCss]
    },
    {
        language: 'JSON',
        parser: 'json',
        plugins: [prettierPluginBabel, prettierPluginEstree]
    },
    {
        language: 'XML',
        parser: 'xml',
        plugins: []
    },
    {
        language: 'Graphql',
        parser: 'graphql',
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
    const formattedCode = await prettier.format(unformattedCode, { parser, plugins: plugins });
    return formattedCode;
};