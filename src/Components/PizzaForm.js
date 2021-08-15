import React from "react";

const HomeComponent = (props) => {

    const {values} = props;

    console.log('Value Prop', values)

    return (
        <div>
            <header>
                <h2>Build Your Own Pizza</h2>
            </header>
            <h1>Build Your Own Pizza</h1>
            <h2>Choice of Size</h2>

            <select>
                <option value="select">Select</option>
                <option value="personal">6" Personal</option>
                <option value="Small">10" Small</option>
                <option value="medium">12" Medium</option>
                <option value="large">14" Large</option>
                <option value="x-large">16" X-Large</option>
            </select>

            <h2>Choice Of Sauce</h2>
            <div>
                <label>
                    <input type='radio' name='red_sauce'/> Original Red
                </label>
            </div>

            <div>
                <label>
                    <input type='radio' name='garlic_sauce'/> Garlic Ranch
                </label>
            </div>
            <div>
                <label>
                    <input type='radio'/> BBQ Sauce
                </label>
            </div>
            <div>
                <label>
                    <input type='radio'/> Spinach Alfredo
                </label>
            </div>

            <h2>Add Toppings</h2>
            <h4>Choose Up to 2 Items</h4>

            <div className='toppingsChecklist'>
                <div>
                    <label>
                        <input type='checkbox'/> Pepperoni
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox'/> Diced Tomatoes
                    </label>
                </div>

                <br/>

                <div>
                    <label>
                        <input type='checkbox'/> Sauage
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox'/> Black Olives
                    </label>
                </div>

                <br/>

                <div>
                    <label>
                        <input type='checkbox'/> Candian Bacon
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox'/> Roasted Garlic
                    </label>
                </div>

            </div>

            <br/>

            <div>
                <h2>Special Instructions</h2>

                <textarea placeholder='Add anything else?'/>
            </div>

            <div>
                <input type='number' placeholder='Quantity'/>
                <button>Add To Order</button>
            </div>

        </div>
    )
}


export default HomeComponent
