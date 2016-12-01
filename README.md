# Quiltr - React

Partial implementation of [Quiltr](https://github.com/rhjones/quiltr) using React

## Dependencies & Tools

- Bootstrapped using [`create-react-app`](https://github.com/facebookincubator/create-react-app)
- [`react-router`](https://github.com/ReactTraining/react-router)
- [`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap)
- [`bootstrap`](https://github.com/twbs/bootstrap)
- [`react-fontawesome`](https://github.com/danawoodman/react-fontawesome)

## Notes

- **Free dynos on Heroku (where the API is hosted) can be very slow to spin up. The first time you load the page, it will take a minute to grab the initial set of data; subsequent calls will be much more reasonable. If you'd prefer to run the API locally, code and setup instructions are at [`rhjones/quiltr-api`](https://github.com/rhjones/quiltr-api).**
- I'm redirecting from `/` to `/patterns` automatically because, for this implementation, having a mostly content-less index/root view didn't seem to make sense.
- I'm currently using `hashHistory` instead of `browserHistory` for easier deployment to GH Pages. [`rafrex/spa-github-pages`](https://github.com/rafrex/spa-github-pages) looks like a reasonable solution to this problem, but I haven't yet pursued this in the interest of time.
- I initially developed my API to work with Ember and [`ember-data`](https://github.com/emberjs/data), which initiates requests for related data based on [models](https://guides.emberjs.com/v2.9.0/models/relationships/) defined in the app. I've written a fairly clunky promise chain in the [ProjectCard](https://github.com/rhjones/quiltr-react/blob/master/src/modules/ProjectCard.js) component that fetches the user and image associated with a particular project after first getting that project and the related user/image IDs, but I suspect there are several better ways to handle this—through [`redux`](https://github.com/reactjs/redux), or perhaps with [`Promise.all` and an array of URLs](http://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all). The `componentDidMount()` method in [lines 23-46](https://github.com/rhjones/quiltr-react/blob/master/src/modules/ProjectCard.js#L23) of this component is the least DRY/concise bit of code in the project.
