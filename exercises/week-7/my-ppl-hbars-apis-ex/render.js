class Renderer {
    static render(data) {
        const _container = $(`#container`)
        const _source = $(`#template`).html()
        const _template = Handlebars.compile(_source)
        _container.empty()
        _container.append(_template(data))
    }
}