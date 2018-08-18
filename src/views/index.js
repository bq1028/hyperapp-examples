// Bundle css for this view
import 'sanitize.css'
import './global.css'

// Import dependencies
import {h} from 'hyperapp'
import {Route} from "@hyperapp/router"
import {Header} from './Header/Header.js'
import {Listing} from './Listing/Listing.js'
import {ProjectForm} from './ProjectForm/ProjectForm.js'
import {ProjectViewer} from './ProjectViewer/ProjectViewer.js'
import {Footer} from './Footer/Footer.js'


// Root view
export const view = (state, actions) => {
  console.log(state)
  return (
    <div>
      <Header />
      <Listing projects={state.projects} />
      <ProjectForm {...state.projectForm} />
      <Route path="/:id" render={ProjectViewer}/>
      <Footer />
    </div>
  )
}



