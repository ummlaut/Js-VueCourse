//1
const ul = document.querySelector("ul");
ul.classList.add("list");
//2
ul.nextElementSibling.setAttribute("id", "link");
//3
for (let i = 0; i < ul.children.length; i++) {
  if (!ul.children[i] === 0) {
    ul.children[i].classList.add("item");
  }
}
//4
const [...links] = document.links;
links.forEach((link) => link.classList.add("custom-link"));

//prepod solutions
/**2
 *  Два решения. Первое через селектор ~. Второе через цикл while.
    // 2.1
    // const link = document.querySelector('ul ~ a');
    // link.id = 'link';
    // console.log(link);

    // 2.2
    const list = document.querySelector('ul');
    // Будущая ссылка
    let link;
    // Следующий элемент после списка, стартовая точка.
    let nextElement = list.nextElementSibling;
    // Проверяем пока не найдена ссылка или больше не осталось следующих элементов мы выполняем данный цикл.
    while(!link || !nextElement) {
      // Если больше нет следующего элемента мы останавливаем цикл
      if (!nextElement) break;
      // Если у следующего элемента тег ссылка то мы записываем ее в переменную
      if (nextElement.tagName === 'A') {
        link = nextElement;
      }
      // записываем следующий элемент
      nextElement = nextElement.nextElementSibling;
    }

    console.log(link);


    //3

    // Также два варианта решения.
    // 3.1
    const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
    liN2.forEach(li => li.classList.add('item'));
    // 3.2
    const [...allLi] = document.querySelectorAll('li');
    allLi.forEach((li, index) => {
      if (!(index % 2)) {
        li.classList.add('item')
      }
    });
 */
