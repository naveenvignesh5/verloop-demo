class CustomTable {
  constructor(config, element) {
    this.config = config;
    this.element = element;
    this.render();
  }

  generateRow(rowConfig, rowIndex) {
    const { colDefs } = this.config;
    const { id, colData } = rowConfig;
    const cols = colDefs
      .map((def, i) => {
        const { label, width, type } = def;
        return [
          '<td><div class="form-group">',
          `<label for="ip_${rowIndex}_${i}">${label}</label>`,
          `<input class="form-control" style="width: ${width}" id="ip_${rowIndex}_${i}" type="${type}" value="${
            colData[i]
          }" ${type === "checkbox" ? (colData[i] ? "checked" : "") : ""}>`,
          "</div></td>"
        ].join("");
      })
      .join("");

    return `<tr id="${id}"><td>${id}</td>${cols}<td><button class="btn btn-danger" onclick="table.deleteRow(${id})">Remove</button></td></tr>`;
  }

  render() {
    console.log(this.config.data);
    const rows = this.config.data.map((e, i) => this.generateRow(e, i));
    let renderHTML = [
      '<table class="table table-custom table-bordered">',
      '<tbody class="thead-dark">',
      rows.join(''),
      "</tbody></table>"
    ].join("");
    this.element.innerHTML = renderHTML;
  }

  // Add Row
  addRow(rowConfig) {
    this.config.data.push(rowConfig);
    this.render();
  }

  // Delete
  deleteRow(e) {
    const row = document.getElementById(e);
    let delIndex = null;
    this.config.data.forEach((r, i) => {
      if (e === r.id) {
        delIndex = i;
      }
    });
    this.config.data.splice(delIndex, 1);
    row.parentNode.removeChild(row);
  }

  // Update
  updateRow(id, newData) {
    this.config.data = this.config.data.map(d => {
        const temp = d;
        if (temp.id === id) {
            temp.colData = newData;
        }
        return temp;
    });
  }
}
