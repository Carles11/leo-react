export const getSlug = (text) => {
  if (text !== 'Semifinal Latinoamérica') {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  } else {
    return 'semifinal-latinoamerica';
  }
};

export const isDisabled = (el) => {
  if (el.hasAttribute('disabled')) {
    el.removeAttribute('disabled');
    return false;
  }

  el.setAttribute('disabled', '');
  return true;
};

export const getNextEditionYear = () => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const fromMonth = 5; // from May
  const toMonth = 12; // to December
  let editionYear = date.getFullYear();

  if (currentMonth > fromMonth && currentMonth < toMonth) {
    editionYear = editionYear + 1;
  }
  return editionYear;
};
