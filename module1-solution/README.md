This solution contain the basic rules and the bonus improvements
The controller has three methods:
  - countDishes: contains logics for count the amount of dishes according the basic rules and the bonus rules
  - evaluateLunch: set in the scope the apropriate message according the rule of amount of dishes
  - changeStyles: set in  the scope the objects used by ngStyle directive. These styles are responsible for show the apropriate colors when user clicks in the "Check if too much" button

The above methods are used by method "checkLunch" of the scope. That method is called by "ng-click" directive  