import React from 'react';
import('./Footer.css')
const Footer = () => {
    return (
        <div className='footer'>
             <div className='faq-1'>
           <h3> How does react work ?</h3>
           <p> One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.</p>
          </div>

          <div className='faq-1'>
           <h3>what is the Difference between props and state ?</h3>
           <p> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
          </div>

          <div className='faq-1'>
           <h3> when use useEffect without loaded data?</h3>
           <p> The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects</p>
          </div>
        </div>
    );
};

export default Footer;