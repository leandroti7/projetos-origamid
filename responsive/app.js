function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativo = function () {
    this.element().classList.add("ativo");
  };
}

const li = new Dom("li");
// li.ativo();
