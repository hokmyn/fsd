const Donut = function (container) {
  this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  this.svg.setAttribute('viewBox', '0 0 42 42');
  this.svg.setAttribute('width', '100%');
  this.svg.setAttribute('height', '100%');

  const data = JSON.parse(container.dataset.donut);

  let total = 0;
  data.forEach((element) => {
    total += element.value;
  });

  const str = document.createElement('div');
  str.classList.add('donut__text');
  str.innerHTML = `<h1 class="donut__main-value">${total}</h1> голосов`;
  container.appendChild(str);

  this.draw = function () {
    container.appendChild(this.svg);

    let offset = 25;
    const radius = 15.91549430918952;
    const center = 21;

    const dashes = [];
    data.forEach((element) => {
      const value = (element.value / total) * 100;
      const width = element.bold ? 4 : 1.2;

      const segment = this.createSegment(center, center, radius, `${value} ${100 - value}`, offset, element.color, width);
      this.svg.appendChild(segment);

      dashes.push(offset);

      offset -= value;
    });

    dashes.forEach((element) => {
      const segment = this.createSegment(center, center, radius, '.8 99.2', element + 0.4, '#fff', 5);
      this.svg.appendChild(segment);
    });

    this.svg.appendChild(
      this.createSegment(center, center, 18.8, '', '', '#fff', 4),
    );
  };

  this.createSegment = function (x, y, r, dashes, offset, color, width) {
    const segment = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    segment.setAttribute('cx', x);
    segment.setAttribute('cy', y);
    segment.setAttribute('r', r);
    segment.setAttribute('stroke', color);
    segment.setAttribute('fill', 'transparent');
    segment.setAttribute('stroke-dasharray', dashes);
    segment.setAttribute('stroke-dashoffset', offset);
    segment.setAttribute('stroke-width', width);

    return segment;
  };
};

export default Donut;
