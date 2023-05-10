import { getBands } from "./database.js"

const bands = getBands()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li>
                    ${band.name}
                </li>`
    }

    html += "</ul>"

    return html
}

