import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const yamlPath = path.join(process.cwd(), 'src/shared/api/schema/main.yaml')
const jsonPath = path.join(process.cwd(), 'public/api/schema.json')

const yamlContent = fs.readFileSync(yamlPath, 'utf8')
const jsonContent = yaml.load(yamlContent)

fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2))
console.log('JSON schema generated!')
