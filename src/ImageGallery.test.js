const rewire = require("rewire")
const ImageGallery = rewire("./ImageGallery")
const imageToShowHandler = ImageGallery.__get__("imageToShowHandler")
const closeLightbox = ImageGallery.__get__("closeLightbox")
// @ponicode
describe("imageToShowHandler", () => {
    test("0", () => {
        imageToShowHandler(undefined)
    })
})

// @ponicode
describe("closeLightbox", () => {
    test("0", () => {
        closeLightbox()
    })
})
