const base_url = "https://api.rawg.io/api/";
const postfix = "key=e0ba160c38f14ac0b979a799534e467a";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentYearDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// page_size represents the number of games we need to fetch.
const popular_games = `games?dates=${lastYearDate},${currentYearDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentYearDate},${nextYearDate}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYearDate},${currentYearDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => {
  return `${base_url}${popular_games}&${postfix}`;
};

export const upcomingGamesUrl = () => {
  return `${base_url}${upcoming_games}&${postfix}`;
};

export const newGamesUrl = () => {
  return `${base_url}${new_games}&${postfix}`;
};

export const gameDetailsUrl = (game_id) => {
  const url = `${base_url}games/${game_id}?${postfix}`;
  return url;
};

export const gameScreenshotsUrl = (game_id) => {
  return `${base_url}games/${game_id}/screenshots?${postfix}`;
};

export const searchGameUrl = (game_name) => {
  return `${base_url}games?search=${game_name}&page_size=9&${postfix}`;
};
