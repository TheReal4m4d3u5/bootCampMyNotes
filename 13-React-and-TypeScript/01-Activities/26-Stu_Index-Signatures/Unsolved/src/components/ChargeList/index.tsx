import type Invoice from '../../utils/interfaces/Invoice';
import './style.css';
const ChargeList = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div className='ChargeList'>
      {/* TODO: What is the `Object.keys()` method, and what are we using it for here? */}


      {/* The Object.keys() method in JavaScript returns an array of a given 
      object's own enumerable property names (keys). Here, Object.keys(invoice) 
      creates an array of all keys (property names) in the invoice object. 
      This allows you to iterate over each property of the invoice object by 
      mapping over this array of keys. */}


      {Object.keys(invoice).map((key) => (
        <div className='charge-div' key={key}>
          <span>
            {key}

            {/* TODO: What is this ternary operator doing ?*/}
            {/* The ternary operator in {invoice[key].billed === 'hourly' ? ... : ...} 
            is a shorthand for an if-else statement. It checks whether invoice[key].billed 
            equals 'hourly'. Here's a breakdown: */}

            {/* Condition: invoice[key].billed === 'hourly'
            True Case (?): If billed is 'hourly', whatever is specified after the ? will render.
            False Case (:): If billed is not 'hourly', whatever comes after the : will render.
            This is useful when you want to conditionally display content based on whether an invoice 
            item is billed hourly or otherwise.

            For instance, if invoice[key].billed equals 'hourly', it might render a specific message or 
            component, and if it’s anything else, it might render a different message or component.
            */}
            {invoice[key].billed === 'hourly' ? (
              <em>
                ({invoice[key].hours} hours @{' '}
                {invoice[key].hourlyRate?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                /hr)
              </em>
            ) : null}
          </span>
          <span>
            {invoice[key].price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
      ))}
      {/* TODO: What is the `Object.values()` method, and what are we using it for here?*/}



      {/* The Object.values() method in JavaScript returns an array of a given object's own 
          enumerable property values. In this case, Object.values(invoice) creates an array of 
          all the values within the invoice object, without their keys.

          In {Object.values(invoice).length ? ...}, this code checks if there are any values in the 
          invoice object by evaluating the length of the array returned by Object.values(invoice):

          If there are values (i.e., Object.values(invoice).length is truthy), the code inside the 
          conditional block will render.
          If there are no values (i.e., Object.values(invoice).length is 0), the conditional block won’t 
          render or might display an alternative message.
          This is useful for checking if the invoice object contains any data before attempting to display it, 
          avoiding empty or unnecessary content rendering. */}

      {Object.values(invoice).length ? (
        <h2>
          <span>Total:</span>
          <span>
            {Object.values(invoice)
              // TODO: What are we using the `.reduce()` method for here?


              // The .reduce() method in JavaScript is used to "reduce" an array to 
              // a single value by applying a function to each element in the array. 
              // In the context of invoice, .reduce() is likely being used to accumulate a 
              // total or transform the data in some way based on each currentCharge in the invoice object.
              // Here's how .reduce() works in this example:
              // Parameters:
              // accumulated: This is the accumulator that holds the ongoing result as the array is processed.
              // currentCharge: This represents each element (or charge) in the array as it is processed.
              // Purpose: The .reduce() method here is likely used to:
              // Sum up values, such as a total amount billed from all charges.
              // Accumulate or concatenate information from each currentCharge for a summary.
              // Transform the invoice data into a new format or structure.
              // For example, if invoice contains charges with individual amounts, .reduce() could be used to 
              // calculate the total amount by summing each currentCharge amount:

              .reduce((accumulated, currentCharge) => {
                return accumulated + currentCharge.price;
              }, 0)
              .toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
          </span>
        </h2>
      ) : null}
    </div>
  );
};

export default ChargeList;
