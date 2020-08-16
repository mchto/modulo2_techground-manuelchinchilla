class articleDetail extends Page{
    get descriptionTextBox() { return $('<textarea/>')}

    getDescriptionTextBox(){
        return this.descriptionTextBox;
    }
}
module.exports = new articleDetail();