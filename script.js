function openProduct(id){
  localStorage.setItem("product", id);
  window.location.href = "product.html";
}

const products = {
  sofa: {
    title: "Диван",
    img: "img/sofa.jpg",
    desc: "Комфортний сучасний диван",
    price: "12 000 грн"
  },
  table: {
    title: "Стіл",
    img: "img/table.jpg",
    desc: "Дерев'яний стіл",
    price: "8 000 грн"
  },
  chair: {
    title: "Крісло",
    img: "img/chair.jpg",
    desc: "М'яке крісло",
    price: "6 500 грн"
  },
  bed: {
    title: "Ліжко",
    img: "img/bed.jpg",
    desc: "Велике ліжко",
    price: "15 000 грн"
  },
  wardrobe: {
    title: "Шафа",
    img: "img/wardrobe.jpg",
    desc: "Містка шафа",
    price: "11 000 грн"
  }
};

if(window.location.pathname.includes("product.html")){
  const id = localStorage.getItem("product");
  const p = products[id];

  document.getElementById("title").innerText = p.title;
  document.getElementById("img").src = p.img;
  document.getElementById("desc").innerText = p.desc;
  document.getElementById("price").innerText = p.price;
}

function buy(){
  const text = "Хочу купити товар";
  window.open(`https://t.me/aasdd130?text=${text}`);
}
