// Sections of this file would be placed in different JS files In-Real-World applications...
// All image links are from vanhack domain and used for ilustrative purpose only.
// IMPORTANT: Since this is a prototype, enrollment state will not persist on page reload

// Mock Database connection to fetch events and emulate a decoupled environment
(function(){
  window.API = {};

  /**
   * Gererate random ID for the mock database items
   * Useful for debug purposes, but abandoned because a fixed ID is needed to share
   * via social media and get a valid URL to open the event
   *
   */
  function generateId () {
    return Math.random().toString(36).substring(2);
  };

  /**
   * Generate date in the future to make sense when rendered
   *
   */
  function todayPlus(n) {
    let today = new Date();
    return today.setDate(today.getDate() + n);
  }

  // List Event Types to prevent typos
  const MEETUP = 'meetup';
  const LEAP = 'leap';
  const RECRUITING = 'recruiting';
  const HACKATON = 'hackaton';
  const PREMIUM = 'premium';
  const WEBINAR = 'webinar';

  // Leap, Recruiting and Hackaton are first to render first in accordion
  // Each event can also be featured in the carousel to stand out even more
  const eventTypes = [
    {
      id: LEAP,
      name: 'Leap'
    },
    {
      id: RECRUITING,
      name: 'Recruiting Mission'
    },
    {
      id: HACKATON,
      name: 'VanHackaton'
    },
    {
      id: MEETUP,
      name: 'Meetup'
    },
    {
      id: PREMIUM,
      name: 'Premium-only Webinar'
    },
    {
      id: WEBINAR,
      name: 'Open Webinar'
    }
  ];

  /**
   * Get all the event types
   *
   */
  API.fetchEventTypes = () => {
    return new Promise((res, rej) => {
      setTimeout(() => { // Emulate latency in database connection
        return res(eventTypes);
      }, 100);
    })
  }

  // It is up to the database return events ordered by date, so events are grouped by type and ordered by date
  // This prototype is also assuming the dabase returns a view with the enrollment status along with event data
  const events = [
    {
      id: 'hafr2juxc0a',
      type: MEETUP,
      name: 'VanHack Virtual Meetup',
      date: todayPlus(3),
      limit: todayPlus(2),
      location: 'Online',
      image: 'https://image.slidesharecdn.com/vanhacknewproposal-160221031609/95/vanhack-brand-evolution-10-638.jpg',
      enrolled: false
    },
    {
      id: '1y532q2vezi',
      type: MEETUP,
      name: 'Recife Meetup',
      date: todayPlus(5),
      limit: todayPlus(4),
      location: 'Recife/PE - Brazil',
      image: 'https://blog.vanhack.com/wp-content/uploads/2018/09/Meetup-768x432.png',
      enrolled: false
    },
    {
      id: 'nc4p1kahcyl',
      type: LEAP,
      name: 'Vanhack Leap Vancouver',
      featured: true, // Renders in the carousel
      date: todayPlus(80), //Blame it on CoViD!
      limit: todayPlus(60),
      location: 'Vancouver/BC - Canada',
      image: 'https://blog.vanhack.com/wp-content/uploads/2019/06/Leaping-1024x682.jpg',
      enrolled: false
    },
    {
      id: 'nrphzit2oig',
      type: LEAP,
      name: 'Vanhack Leap Montreal',
      date: todayPlus(110),
      limit: todayPlus(100),
      location: 'Montreal/QC - Canada',
      image: 'https://blog.vanhack.com/wp-content/uploads/2020/02/leap-logo-01-1024x683.png',
      enrolled: false
    },
    {
      id: 'cy4sf49gzht',
      type: LEAP,
      name: 'Vanhack Leap Toronto',
      date: todayPlus(130),
      limit: todayPlus(120),
      location: 'Toronto/ON - Canada',
      image: 'https://blog.vanhack.com/wp-content/uploads/2019/08/Toronto.jpg',
      enrolled: false
    },
    {
      id: 'qirhjjh04gi',
      type: RECRUITING,
      name: 'Online Recruiting Mission Brazil!',
      featured: true, // Renders in the carousel
      date: todayPlus(20),
      limit: todayPlus(20),
      location: 'Online',
      image: 'https://www.vanhack.com/wp-content/uploads/2018/05/IMG_9501.jpg',
      enrolled: true //Only event starting already enrolled just to show the badge in cards and carousel, since this is featured
    },
    {
      id: '4f8r0hux8da',
      type: RECRUITING,
      name: 'SP Recruiting Mission',
      date: todayPlus(45),
      limit: todayPlus(40),
      location: 'São Paulo/SP - Brazil',
      image: 'https://www.vanhack.com/wp-content/uploads/2018/11/sp-mission2019-bg.jpg',
      enrolled: false
    },
    {
      id: 'v7flwp4fbed',
      type: HACKATON,
      name: 'VanHackaton Colombia',
      featured: true, // Renders in the carousel
      date: todayPlus(30),
      limit: todayPlus(25),
      location: 'Bogotá - Colombia',
      image: 'https://blog.vanhack.com/wp-content/uploads/2016/04/microsoft-1024x539.jpg',
      enrolled: false
    },
    {
      id: '8xvl66bg2kc',
      type: WEBINAR,
      name: 'Webinar DevOps vs SRE',
      date: todayPlus(15),
      limit: todayPlus(15),
      location: 'Online',
      image: 'https://blog.vanhack.com/wp-content/uploads/2020/06/DeVopsvsSRE.png',
      enrolled: false
    },
    {
      id: '52a2w79bps',
      type: WEBINAR,
      name: 'Webinar Interview Practice',
      date: todayPlus(55),
      limit: todayPlus(55),
      location: 'Online',
      image: 'https://www.vanhack.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-29-at-17.48.10.png',
      enrolled: false
    },
    {
      id: 'o6wramg533o',
      type: PREMIUM,
      name: 'Premium-Only Webinar: Remote Hiring',
      date: todayPlus(55),
      limit: todayPlus(55),
      location: 'Online',
      image: 'https://blog.vanhack.com/wp-content/uploads/2020/03/Remote-Hiring-1024x536.png',
      enrolled: false
    },
    {
      id: 'xyi4z2vug8s',
      type: PREMIUM,
      name: 'Premium-Only: Tech Interview',
      date: todayPlus(65),
      limit: todayPlus(65),
      location: 'Online',
      image: 'https://blog.vanhack.com/wp-content/uploads/2017/06/tech-interview.png',
      enrolled: false
    }
  ];

  /**
   * Main method in this fake database to get all the events
   *
   */
  API.fetchEvents = () => {
    return new Promise((res, rej) => {
      setTimeout(() => { // Emulate latency in database connection
        return res(events);
      }, 100);
    });
  }

  /**
   * Updates the database the same way the local store is updated
   * this is done twice in this .JS file, but only to keep it decoupled.
   * In real world even this database mockup should exist in a different file
   *
   * @param {*} id - the event id
   */
  API.enrollToEvent = (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        events = events.map((evt) => evt.id !== id ? evt :
          Object.assign({}, evt, {enrolled: true})
        );
      });
    });
  }

  /**
   * Return static event details, because the content is irrelevant.
   * Further details of an event usually require a new query to the database,
   * so this is what this emulation is for
   *
   * @param {*} id - the event id (ignored in this mock)
   */
  API.getEventDetails = (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => { // Emulate latency in database connection
        return res({
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Leo urna molestie at elementum eu facilisis sed odio. Libero volutpat sed cras ornare arcu dui. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id.

Id aliquet lectus proin nibh nisl condimentum id venenatis a. Mattis molestie a iaculis at. Nec ullamcorper sit amet risus nullam eget felis eget. Orci a scelerisque purus semper eget duis at tellus at. Sem integer vitae justo eget magna. Eu lobortis elementum nibh tellus molestie nunc non. In est ante in nibh mauris cursus mattis molestie a.

Tincidunt augue interdum velit euismod in pellentesque massa placerat. Risus viverra adipiscing at in tellus integer feugiat. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Posuere sollicitudin aliquam ultrices sagittis orci.

Ullamcorper sit amet risus nullam eget. Aliquet nibh praesent tristique magna sit amet purus gravida. Ut etiam sit amet nisl. Tempus urna et pharetra pharetra massa massa ultricies. Accumsan in nisl nisi scelerisque eu ultrices. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Risus in hendrerit gravida rutrum quisque non. Eget arcu dictum varius duis at consectetur. Pulvinar mattis nunc sed blandit libero volutpat. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec.`
        });
      }, 100);
    });
  }
})()

// Redux Action Types library to avoid typo mistakes and silent bugs...
const RECEIVE_DATA = 'RECEIVE_DATA';
const ENROLL = 'ENROLL';

/**
 * Redux Reducer (Pure function) to hold loading state while retrieving events data from "database"
 *
 * @param {array} state - the previous state
 * @param {obj} action - the action to process
 */
function loading(state = true, action) {
  switch(action.type){
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

/**
 * Redux Reducer to handle actions on events fetch and enrollment
 *
 * @param {array} state - the previous state
 * @param {obj} action - the action to process
 */
function events(state = [], action){
  switch(action.type){
    case RECEIVE_DATA:
      return action.events;
    case ENROLL:
      return state.map((evt) => evt.id !== action.id ? evt :
          Object.assign({}, evt, {enrolled: true}));
    default:
      return state;
  }
}

/**
 * Redux Reducer to store Event Types
 *
 * @param {array} state - the previous state
 * @param {obj} action - the action to process
 */
function eventTypes(state = [], action){
  switch(action.type){
    case RECEIVE_DATA:
      return action.eventTypes;
    default:
      return state;
  }
}

/**
 * Create the Redux Action Obj from the events list
 *
 * @param {array} events - the array with the event objs
 * @param {array} eventTypes - the array with the event types
 */
function receiveDataAction(events, eventTypes){
  return {
    type: RECEIVE_DATA,
    events,
    eventTypes
  }
}

/**
 * Create the Redux Action Obj to enroll to an event
 *
 * @param {*} id - the event id
 */
function enrollToEventAction(id) {
  return {
    type: ENROLL,
    id
  }
}

/**
 * Redux Logger Middleware for debugging purposes
 * Every state change is logged in the browser console.
 *
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('Action: ', action);
  const result = next(action);
  console.log('New State: ', store.getState());
  console.groupEnd();
  return result;
}

/**
 * Redux Middleware to prevent from enrolling on premium-only events.
 * The function returning functions pattern is inherited from the Redux itself.
 * It is awful, I know...
 *
 */
const checkPremium = (store) => (next) => (action) => {
  if(action.type == ENROLL){
    const evt = store.getState().events.filter((e) => e.id === action.id)[0];
    if(evt.type == 'premium'){
      document.getElementById('evtConfLabel').innerHTML =
        `<span class="badge badge-warning">Warning</span>
        Enrollment Not Available<br />${evt.name}`;
      document.getElementById('eventEnrollmentConfirmationModal')
        .getElementsByClassName('modal-body')[0].innerHTML =
        `<p>This event is for VanHack Premium users only.</p>
        <a
          href="https://vanhack.com/checkout"
          target="_blank"
          class="btn btn-info btn-lg active"
          role="button"
          aria-pressed="true">
          Click here to read more about<br />the Premium Membership</a>`;
      $('#eventEnrollmentConfirmationModal').modal('show');
      return false;
    }
  }
  return next(action);
}

// "Single Source of Truth" with Redux Store
const store = Redux.createStore(
  Redux.combineReducers({
    loading,
    events,
    eventTypes}),
  Redux.applyMiddleware(logger, checkPremium)
  );

/**
 * When the static elements of the page finishes loading, fetch events from the "database".
 *
 */
window.onload = () => {
  // Fecth Events from the database mock
  Promise.all([
    API.fetchEvents(),
    API.fetchEventTypes(),
  ]).then(([
    events,
    eventTypes
  ]) => {
    store.dispatch(receiveDataAction(events, eventTypes));
  })

  // Subscribe render function to state change events
  // Not only will this render the initial events, but also assures the re-render state
  // when the user enrolls to an event
  store.subscribe(clearAndLoadContent);

  // After Carousel is filled with the rendered events, start spinning
  $('#carouselEventCaptions').carousel({ interval: 5000 });
  $('#carouselEventCaptions').carousel('cycle');

  // Handles apply event on Event Detail window, which is reused for each event
  $('#apply').on('click', applyToEvent);
  // Handles event details modal close to replace title and URL
  // (Boy, I miss the React RouterDOM now...)
  $('#eventDetailsTemplate').on('hidden.bs.modal', pushMainPageToHistory)
}

/**
 * Checks if an event is supplied in the URL parameter
 * as it would be shared via the Social Share URLs.
 *
 */
function checkOnLoadEventURL() {
  //If eventID is provided in URL, opens eventdetail window
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const eventID = urlParams.get('event');
  if(eventID){
    const event = store.getState().events.filter((evt) => evt.id == eventID)
    if(event){
      updateEventDetailModal(event[0]);
      $('#eventDetailsTemplate').modal('show');
    }
  }
}

/**
 * Handle HTML5 history back button.
 * This is a side effect of having to deal with URL changes without refreshing the page.
 * In a real application I would user the React Router solution to encapsulate this behavior.
 *
 * @param {*} e - the event from the browser.
 */
window.onpopstate = function(e) {
  if(e.state){
    // Closes the event details modal if opened to clean the page state and re-render
    if($('#eventDetailsTemplate').attr('class') == 'modal fade show')
      $('#eventDetailsTemplate').modal('hide');
    clearAndLoadContent();
  }
};

/**
 * Restores URL to main page when the event details modal is closed
 * Pushes the state to the navigation history to update URL without refreshing the page.
 *
 * @param {*} e (ignored)
 */
function pushMainPageToHistory(e) {
  document.title = "VanHack's Upcoming Events";
  window.history.pushState({
      "html":'void',
      "pageTitle":document.title
    },
    "",
    `${location.protocol}//${location.host}${location.pathname}` // clean parameters
  );
}

/**
 * Saves the currently expanded section in the accordion and clean the contents
 * for re-rendering.
 *
 */
function clearAndLoadContent(){
  // Store currently expanded session to keep view when page is re-rendered
  const expandedSection = $(".collapse.show").attr('id');
  // Clear Accordion
  $('#accordionEvents').html('');
  // Clear Carousel
  $('#carouselEventIndicators').html('');
  $('#carouselInnerContent').html('');
  renderAccordion(expandedSection);
  checkOnLoadEventURL();
}

/**
 * Gets the events and event types from the store and renders the Acoordion
 * structure to get the event cards later on.
 *
 * @param {string} [expand='collapseleap'] If not defined, the Leap events start expanded by default
 */
function renderAccordion(expand = 'collapseleap') {
  const { events, eventTypes } = store.getState();
  eventTypes.forEach((type) => renderAccordionSection(type, expand));
  events.forEach((event) => renderEventCard(event));
}

/**
 * Clones Template Accordion Section, updates titles and adds to DOM
 *
 * @param {*} type Event Type
 * @param {string} [expand='collapseleap'] If not defined, the Leap events start expanded by default
 */
function renderAccordionSection(type, expand = 'collapseleap') {
  const $node = $('#accordionSectionTemplate').clone();
  $node.removeAttr('style') // make it visible
    .removeAttr('id'); // remove id from parent node to prevent duplicate id
  $node.find('.card-header').attr('id', type.id);
  $node.find('.btn, .btn-link, .btn-block, .text-left')
    .attr('data-target', `#collapse${type.id}`)
    .attr('aria-controls', `collapse${type.id}`)
    .html(`${type.name} Events`);
  $node.find('.collapse')
    .attr('id', `collapse${type.id}`)
    .attr('aria-labelledby', type.id);
  $node.find('.d-flex, .justify-content-center, .flex-wrap')
    .attr('id', `${type.id}EvtCards`);
  $('#accordionEvents').append($node);
  // section to start expended by default
  if(`collapse${type.id}` == expand){
    $(`#collapse${type.id}`).collapse('show');
  }
}

/**
 * Clones Template Event Card HTML node, fills in info and adds to DOM
 * I'd rather use React Components and JSX(Babel), but the libraries import were blocked... :(
 * So we are stuck with Vanilla script. At least we have JQuery... ;)
 *
 * @param {obj} event
 */
function renderEventCard(event) {
  // Clones the template node, changes the ID and remove the style to make it visible
  const $node = $('#eventCardTemplate').clone()
    .prop('id', `evt_card_${event.id}`)
    .removeAttr('style');
  // Updates the card title adding badges according to enrollment and premium states
  $node.find('.card-title').html(`
    ${event.name}
    ${event.enrolled?' <span class="badge badge-success">Enrolled</span>' :''}
    ${event.type == 'premium'?` <span class="badge badge-primary">Premium-only</span>` : ''}`);
  // Adds a shadow and blue border on premium event cards: discrete, but enough to stand-out
  if(event.type == 'premium'){
    $node.find('.card').attr('class', 'card shadow-lg p-3 mb-5 bg-white rounded');
    $node.find('.card-body').attr('class', 'card-body border border-primary');
  }
  // Replaces the image
  $node.find('.card-img-top')
    .attr('src', event.image)
    .attr('alt', event.name);
  // Updates the event dates
  $node.find('.card-subtitle').html(formatDate(event.date, true));
  $node.find('.card-text').html(
    `<p>${event.location}</p><p>Apply Before: ${formatDate(event.limit)}</p>`);
  // Adds the event to open the Event Details modal window
  $node.find('.btn-primary').attr('data-target', '#eventDetailsTemplate')
    .on('click', () => updateEventDetailModal(event));
  // Adds to the DOM
  $(`#${event.type}EvtCards`).append($node);
  // If event is featured, renders slide in the carousel too
  event.featured && renderCarouselItem(event);
}

/**
 * Formats date to Locale default
 *
 * @param {*} d (the date object, string or number)
 * @param {boolean} [long=false] By default returns day/month only
 * @returns date in string format
 */
function formatDate(d, long = false){
  // locale undefined to use user default locale
  return long?
    new Date(d).toLocaleDateString(undefined, {dateStyle: 'long'}):
    new Date(d).toLocaleString(undefined, {day: '2-digit', month: '2-digit'});
}

/**
 * Updates the Template Event Detail Modal window with the event details
 *
 * @param {obj} event
 */
function updateEventDetailModal(event) {
  $('#eventDetailsTemplate .modal-title').html(
    `${event.name}${event.enrolled?' <span class="badge badge-success">Enrolled</span>' :''}`);
  // Since the modal window is reused, the event data is stored in data attributes (HTML5 standard)
  $('#apply')
    .attr('data-event-id', event.id)
    .attr('data-event-name', event.name)
    .attr('data-event-location', event.location)
    .attr('data-event-date', formatDate(event.date, true))
    .attr('data-event-enrolled', event.enrolled);
  if(event.enrolled){
    $('#apply').html("See Application").attr('class', 'btn btn-success');
  }else{
    $('#apply').html('Apply').attr('class', 'btn btn-primary');
  }
  API.getEventDetails(event.id).then((d) => {
    $('#eventDetailsTemplate .modal-body').html(`
    <img
      src="${event.image}"
      class="d-block w-100 event-detail-img"
      alt="${event.name}"
    >
    <h5 class="p-4">
      ${event.location} on ${formatDate(event.date, true)}
    </h5>
    <p>
      ${d.details.split('\n').join('</p><p>')}
    </p>`);

    addSocialButtons(event);
    //Updates title, URL and history to allow history navigation, direct load of event page when shared via link
    document.title = event.name;
    window.history.pushState({
        "html": 'void',
        "pageTitle":document.title
      },
      "",
      //document.URL could lead to various event parameters, so this is "manually" rebuilt
      `${location.protocol}//${location.host}${location.pathname}?event=${event.id}`);
  });
}

/**
 * User applied to and event.
 * An enrollment action is dispatched.
 */
function applyToEvent() {
  // Retrieve event data from data-event-* attribute (HTML5 dataset standard)
  const evt = document.querySelector('#apply');
  $('#evtConfLabel').html(
    `<span class="badge badge-success mr-3">Success</span>Enrollment Confirmed:<br />${evt.dataset.eventName}`);
  $('#eventEnrollmentConfirmationModal .modal-body').html(
    `<p>Location: ${evt.dataset.eventLocation}</p><p>Date: ${evt.dataset.eventDate}</p>`);
  $('#eventEnrollmentConfirmationModal').modal('show');
  // Dispatches event only if not enrolled yet
  if(evt.dataset.eventEnrolled == 'false')
    store.dispatch(enrollToEventAction(evt.dataset.eventId));
}

/**
 * Renders a featured event in the carousel
 *
 * @param {obj} event
 */
function renderCarouselItem(event) {
  const $node = $('#carouselItemTemplate').clone()
    .prop('id', `carousel_${event.id}`)
    .removeAttr('style');
  const n = $('#carouselEventIndicators li').length; //Number of featured events already added to carousel
  if(n == 0){$node.addClass('carousel-item active');}
  $node.find('.d-block, .w-100').attr('src', event.image).attr('alt', event.name);
  $node.find('.carousel-caption, .d-none').html(
    `<h5>${event.name}${event.enrolled?' <span class="badge badge-success">Enrolled</span> ':''}</h5>
    <p class="m-1">${event.location} on ${formatDate(event.date, true)}
    <a href="#" class="btn btn-primary ml-4 stretched-link" data-toggle="modal" data-target="#eventDetailsTemplate">See Details</a></p>`);
  $('#carouselInnerContent').append($node);
  $(`#carousel_${event.id} a`).on('click', () => updateEventDetailModal(event));
  // Create Indicator link for the carousel slide
  const $li = $('<li>').attr('data-target', '#carouselEventCaptions').attr('data-slide-to', n);
  if(n == 0) {$li.addClass('active');}
  $('#carouselEventIndicators').append($li);
}

/**
 * Renders the Social Media sharing buttons cloning from the main page footer
 * The URL shared is dynamically taken from document.title and document.URL,
 * which is updated when event details modal is open.
 * So an event shared contains a link to the shared event.
 *
 * @param {obj} event
 */
function addSocialButtons(event) {
  const $node = $('#shareSocialTemplate').clone().prop('id', `social_${event.id}`);
  $('#eventDetailsTemplate .modal-body').append($node);
}