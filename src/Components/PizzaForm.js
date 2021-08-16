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

            <labrl>
                <input type='text' id='name-input'  placeholder='Enter Your Name' />
            </labrl>


            <h2>Choice of Size</h2>

            <select id='size-dropdown'>
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
                    <input type='radio' name='bbq_sauce' /> BBQ Sauce
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='alfredo_sauce'/> Spinach Alfredo
                </label>
            </div>

            <h2>Add Toppings</h2>
            <h4>Choose Up to 2 Items</h4>

            <div className='toppingsChecklist'>
                <div>
                    <label>
                        <input type='checkbox' name='pepperoni' /> Pepperoni
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox' name='diced_tomatoes' /> Diced Tomatoes
                    </label>
                </div>

                <br/>

                <div>
                    <label>
                        <input type='checkbox' name='sausage' /> Sauage
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox' name='olives' /> Black Olives
                    </label>
                </div>

                <br/>

                <div>
                    <label>
                        <input type='checkbox' name='cana_bacon' /> Candian Bacon
                    </label>{'         '}{'                   '}{'               '}{'                      '}
                    <label>
                        <input type='checkbox' name='roasted_garlic' /> Roasted Garlic
                    </label>
                </div>

            </div>

            <br/>

            <div>
                <h2>Special Instructions</h2>

                <textarea id='special-text' placeholder='Add anything else?'/>
            </div>

            <div>
                <input name='qunatity' type='number' placeholder='Quantity'/>
                <button id='pizza-form'>Add To Order</button>
            </div>

        </div>
    )
}


export default HomeComponent
