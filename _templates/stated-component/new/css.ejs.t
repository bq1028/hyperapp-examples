---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.css
---
.<%= h.inflection.dasherize(name.toLowerCase()) %> {
  max-width: 24rem;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid var(--border-color);
  text-align: center;
  >p {
    text-align: left;
  }
  >button {
    width: 2rem;
    height: 2rem;
    margin: 0.25rem;
  }
}
 