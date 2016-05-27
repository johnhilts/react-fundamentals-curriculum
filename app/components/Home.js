var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Home () {
  return (
    <div>
      <h1>Weather App!</h1>
      <p className='lead'>React Fundamentals Cirruculum</p>
      <p>Modified by Mr John Hilts</p>
    </div>
  )
}

module.exports = Home;
