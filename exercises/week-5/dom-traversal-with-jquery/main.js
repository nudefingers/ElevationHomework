$(document).ready(function () {

    $(`.processor .generator`).click(function () {
        // $(`.processor .generator, .ram .DDR .validator`).click(function () {
        const _comp = $(this).closest(`.computer`)
        let _id = _comp.find(`.processor`).attr(`id`)
        console.log(`processor ID: ${_id}`)

        let cmp_id = _comp.data().id
        let _dataArray = []
        let _computerObject = {}
        _computerObject[`cmp_id`] = cmp_id
        _dataArray.push(_computerObject)
        console.log(`computer's data: ${_dataArray[0].cmp_id}`)

        let _bus = _comp.find(`.BUS`).text()
        console.log(`BUS number: ${_bus}`)
    })


    $(`.ram .DDR .validator`).click(function () {
        const _comp = $(this).closest(`.computer`)
        let _generator = _comp.find(`.processor`).find(`.generator`).text()
        console.log(`The generator's text: ${_generator}`)

        let _mb = _comp.find(`.MB`).text()
        console.log(`The MB: ${_mb}`)

        let _qr = _comp.find(`processor`).find(`.QR`).text()
        console.log(`Both QRs: ${_qr}`)
    })

})
