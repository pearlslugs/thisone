/*next*/
import Link from 'next/link';
import { useRouter } from 'next/router';
/*components and objects*/
import formObject from '../../src/formObject.js'
import Input from '../../src/component/Input'
/*other imports*/
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import Image from 'next/image'
import * as Yup from "yup";
/*prisma*/



const fromPageOne = ({ homePageContent }) => {

  /*state*/ 
    const [ highlightHeaderOne, setHighlightHeaderOne ] = useState(false);
    const [ highlightHeaderTwo, setHighlightHeaderTwo ] = useState(false);
    const [ highlightHeaderThree, setHighlightHeaderThree ] = useState(false);
    const [ highlightContent, setHighlightContent ] = useState(false);
    const [ userForm, setUserForm ] = useState(formObject)
    const [ email, setEmail ] = useState(null);
    let emailString = ''
    
    /*link and router*/
    const router = useRouter();
  
  

    /*formik functions*/
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password too short";
        }
        return errors;
      };
    const submitForm = (values) => {
        console.log(values);
      };

      /*other functions*/
      const changeEmail = (e) => {
        emailString = e.target.value
      }
      const submitEmail = () => {
        setEmail(emailString);
      }

    return (
       <div className="container">
           <div className="left-side">
             {(email) ? `Email: ${email}` : null}
           <Formik
      initialValues={userForm}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
            <div>
                <div>
              <h1>Hero Section</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="hero-header-one">Main Header Line One </label>
                  <input
                    type="text"
                    name="hero.headerLineOne"
                    id="hero.headerLineOne"
                    onChange={handleChange}
                    onBlur={()=>{setHighlightHeaderOne(false)}}
                    onFocus={()=>{setHighlightHeaderOne(true)}}
                  />
                </div>
                <div>
                  <label htmlFor="hero-header-two">Main Header Line Two </label>
                  <input
                    type="text"
                    name="hero.headerLineTwo"
                    id="headerLineTwo"
                    onChange={handleChange}
                    onBlur={()=>{setHighlightHeaderTwo(false)}}
                    onFocus={()=>{setHighlightHeaderTwo(true)}}
                  />
                </div>
                <div>
                  <label htmlFor="hero-header-three">Main Header Line Three </label>
                  <input
                    type="text"
                    name="hero.headerLineThree"
                    id="headerLineThree"
                    onChange={handleChange}
                    onBlur={()=>{setHighlightHeaderThree(false)}}
                    onFocus={()=>{setHighlightHeaderThree(true)}}
                  />
                </div>
                <div>
                  <label htmlFor="content">Content </label><br />
                  <textarea
                    type="text"
                    name="hero.content"
                    id="content"
                    onChange={handleChange}
                    onBlur={()=>{setHighlightContent(false)}}
                    onFocus={()=>{setHighlightContent(true)}}
                  />
                </div>
                <h2>Bar with image</h2>
                <div>
                  <label htmlFor="bar-header">Header </label>
                  <input
                    type="text"
                    name="humanity-bar.header"
                    id="humanitybarheader"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="hero-header-three">Sub Header </label>
                  <input
                    type="text"
                    name="humanity-bar.subheader"
                    id="headerLineThree"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="hero-header-three">Image URL </label>
                  <input
                    type="text"
                    name="humanity-bar.image"
                    id="headerLineThree"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <button
                  type="submit"
                  onClick={()=>{console.log(values)}}
                >
                  Sign In
                </button>
              </form>
              </div>
            </div>
        );
      }}
    </Formik>
       </div>
       <div className={(highlightHeaderOne) ? "highlight-hero-header-one" : "hidden"}></div>
       <div className={(highlightHeaderTwo) ? "highlight-hero-header-two" : "hidden"}></div>
       <div className={(highlightHeaderThree) ? "highlight-hero-header-three" : "hidden"}></div>
       <div className={(highlightContent) ? "highlight-hero-content" : "hidden"}></div>
       <div className="highlight-bar-header"></div>
       <div className="highlight-bar-subheader"></div>
       <div className="right-side">
        <h1>reference</h1>
        <Image className="reference" src="/page-one.png" alt="reference" width="620" height="570" />
        <input onChange={changeEmail} />
        <button onClick={submitEmail}>set email</button>
       </div>
</div>
    )
}

export default fromPageOne;
