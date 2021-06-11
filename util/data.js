import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(),'content')

export function getPostSlugs() {
    const allPosts = fs.readdirSync(contentDirectory)
    return allPosts.map(fileName =>{
        const slug = fileName.replace('.md','')
        const filecontent = fs.readFileSync(path.join(contentDirectory,fileName),'utf8')
        const {data,content} = matter(filecontent)

        return {data,content,slug}
    })
}