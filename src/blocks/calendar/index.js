/* eslint-disable no-new */
/* global $ */
import Calendar from './Calendar';

const calendarContainers = $('.js-calendar');

calendarContainers.each((_, element) => {
  new Calendar(element);
});
