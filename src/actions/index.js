import {location} from '@hyperapp/router'
import deepmerge from 'deepmerge'
import {replace} from '../utils/'

// Global actions for the app
export const actions = {
  // Router actions
  location: location.actions,

  // Update/set deeply nested properties. Arrays are replaced by the new ones
  update: fragment => state =>
    deepmerge(state, fragment, {arrayMerge: replace}),

  // Set or replace first-level props
  set: fragment => fragment,

  // Called at startup
  init: () => {
    // Subscribe to the router
    window.unsubscribeRouter = location.subscribe(window.main.location)
  },


  handleSearchForm: ev => state => {
    ev.preventDefault()

    alert('search!')
  },

  setProjectForm: fragment => state => deepmerge(state, {projectForm: fragment}, {arrayMerge: replace}),

  handleProjectForm: ev => state => {
    ev.preventDefault()

    alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.projectForm, null, 2))
  }
}