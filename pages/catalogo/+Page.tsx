import { Render } from "@measured/puck"
import editorConfig from "@/pages/editor/@id/editorconfig"
function Catalog() {
  return (
    <Render data={defaultData} config={editorConfig}/>
  )
}

const defaultData = {
    "root": {
        "props": {}
    },
    "content": [
        {
            "type": "DefaultAppshell",
            "props": {
                "id": "DefaultAppshell-ebc070cb-072a-456b-a5eb-5783f5cf81d7"
            }
        }
    ],
    "zones": {
        "DefaultAppshell-ebc070cb-072a-456b-a5eb-5783f5cf81d7:header": [
            {
                "type": "DefaultHeader",
                "props": {
                    "id": "DefaultHeader-ee786a85-092d-4761-90c3-a189b2c61e8c"
                }
            }
        ]
    }
}

export default Catalog