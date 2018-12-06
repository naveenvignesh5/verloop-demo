class CustomTable {
    constructor(config, element) {
        this.config = config;
        this.element = element;
        this.render();
    }

    render() {
        let tableRows = '';
        const dummyConfig = {
            colDefs: [
                {
                    label: 'Text Columns',
                    width: '40%',
                    type: 'text',
                },
                {
                    label: 'Text Columns',
                    width: '40%',
                    type: 'text',
                },
            ],
            data: [
                {
                    id: 'abc',
                    colData: ['value1', 'value2', true],
                },
                {
                    id: 'abc',
                    colData: ['value1', 'value2', true],
                },
            ],
        }

        tableRows += [
            '<table class="table table-custom table-bordered">',
            '<thead class="thead-dark">',
            '<tr><th>Label</th><th>Width (%)</th><th>Type</th><th>Options</th><th>View</th></tr>',
            '</thead><tbody id="table-content">',
        ].join('');

        dummyConfig.data.forEach((e, i) => {
            tableRows += [
                '<tr>',
                '<td><input type="text" class="form-control" /></td>',
                '<td><input type="number" class="form-control" /></td>',
                '<td><select class="form-control">',
                '<option>text</option><option>number</option><option>password</option><option>submit</option><option>radio</option>',
                '</select></td>',
                '<td><div class="d-flex flex-row align-items-center justify-content-center">',
                '<button class="btn btn-secondary mr-3">Update</button>',
                '<button class="btn btn-danger">Delete</button>',
                '</div></td>',
                '<td><input type="text" class="form-control" /></td>',
                '</tr>'
            ].join('');
        });

        tableRows += '</tbody></table>';

        document.getElementById('temp').innerHTML = tableRows;
    }
}