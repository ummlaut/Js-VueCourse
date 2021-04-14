//1
const ul = document.querySelector("ul");
const liCreate = function (number) {
  for (let i = 0; i < number; i++) {
    let li = document.createElement("li");
    li.classList.add("new-item");
    li.textContent = `item + ${number}`;
    ul.appendChild(li);
  }
};

//2
const links = [...document.links].filter((link) => link.closest(ul));
links.forEach((link) => link.insertAdjacentElement("strong"));

//3
const img = document.createElement("img");
img.setAttribute.src =
  "https://sun9-71.userapi.com/impf/c840721/v840721347/5894e/bWiK2l4U4rc.jpg?size=1280x854&quality=96&sign=b43f0aacc7cfe91b5bd0554a92017889&type=album";
img.setAttribute.alt = "грустный мужик у моря";
body.insertAdjacentElement("afterbegin", img);

//5
/*sconst sortedLinks = links.sort(
  (prev.textContent, next.textContent) => prev.textContent - next.textContent
);

//prepod solutions
/**
 * /1
 * const list = document.querySelector('ul');
    // Текущее количество элементов в списке
    const currentCounts = list.children.length;
    // Количество новых элементов
    const newLiCounts = 3;

    for (let i = 0; i < newLiCounts; i++) {
      let li = document.createElement('li');
      li.classList.add('new-item');
      li.textContent = `item ${currentCounts + i + 1}`;
      list.appendChild(li);
    }

    /2
    const [...links] = document.querySelectorAll('ul a');
links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));

    /3
    const img = document.createElement('img');
    img.setAttribute('src', 'https://via.placeholder.com/150/92c952');
    img.setAttribute('alt', 'some image');
    document.body.insertAdjacentElement('afterbegin', img);

    /4
    const mark = document.querySelector('mark');
    mark.insertAdjacentText('beforeend', 'green');
    mark.classList.add('green');

    /5
    const list = document.querySelector('ul');
    // Сортируем массив элементов по текстовому содержимому
    const listItems = [...list.children].sort((prev, next) => {
      return prev.textContent > next.textContent ? -1 : 1;
    });
    // Очищаем текущее содержимое списка
    list.innerHTML = '';
    // Генерируем новое содержимое из отсортированного массива элементов
    listItems.forEach((item) => list.appendChild(item));
 */
