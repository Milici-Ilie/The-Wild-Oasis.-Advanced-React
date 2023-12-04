# The Wild Oasis

Main project. Built with React Query and Supabase.

                                                                                  # Cuprins #

# 1. REACT COURSE

# 2. Titlu

# 3. Titlu

# 4. Titlu

# 5. Titlu

# 6. Titlu

# 7. Titlu

# 8. Titlu

# 9. Titlu

# 10. Titlu

# 11. Titlu

# 12. Titlu

# 13. Titlu

# 14. Titlu

# 15. Titlu

# 16. Titlu

# 17. Titlu

# 18. Titlu

# 19. Titlu

# 20. Titlu

# 21. Titlu

# 22. Titlu

# 23. Titlu

# 24. Titlu

# 25. Titlu

# 26. Titlu

# 27. Titlu

# 28. Titlu

# 29. Titlu

# 30. Performance Optimization and Advanced "useEffect"

    ## ✅I.-Performance Optimization and Wasted Renders

PHOTO - Performance Optimization
PHOTO - Performance Optimization 2

    ## ✅II.-The Profiler Developer Tool

Check the BOOK/page and also the Lesson 244.

    ## ✅III.-Optimization trick with {children} / How to make your App faster using {children}

Lesson: 245/246/247/248/249

    ## ✅IV.-How to keep the App. being fast even when we have a huge list of info's or data's oppened and we work in the App. somewhere else.
          -How to not re-render the entire App.
          -How to use "useCallback" for making the App. faster.

For more info's about "useMemo" and "useCallBack" for a faster App. go and check the SECTION 19.

# 31. Redux ((REDUX-INTRO PROJECTS))

    ## ✅I. -How to create user accounts
          -How to create a BANK App.:
                    -create new customers
                    -deposit money
                    -withdraw
                    -request loan/loan purpose
                    -pay back the loan

Lesson 261 (Introduction), 262, etc ... [store.js]

                                                                   ❗❗❗ [CREATING THE REDUCER] ❗❗❗

    ## ✅II. -How to create/use a Redux Store
           -How to install REDUX

    ## ✅III. How to create Action Creators-functions that returns actions

[store.js]

                                                                ❗❗❗ [FUNCTIONS RETURNING ACTIONS] ❗❗❗

    ## ✅IV.-Profession REDUX file structure: State slices
          -How to organize our project

[accountSlice.js] [customerSlice.js] [index.js] [store-V1.js]

                                                                ❗❗❗ [STRUCTURING THE FILES] ❗❗❗

    ## ✅V. How to connect REDUX App with React

[index.js] [customer.js]

                                                                ❗❗❗ [CONNECTING REDUX WITH REACT] ❗❗❗

    ## ✅VI. -Dispatching actions from our React App
           -How to use the actions from the functions
           -How to create a new customer/user

[CreateCustomer.js] [App.js]

                                                                ❗❗❗ [DISPATCHING ACTIONS] ❗❗❗

    ## ✅VII. How to reveal/hide, open/dissappear contents after LOG-IN or click

[App.js]

                                                                ❗❗❗ [REVEAL/HIDE CONTENT] ❗❗❗

    ## ✅VIII. How to implement the DEPOSIT, WITHDROW, REQUEST LOAN, LOAN PURPOSE, PAY BACK

[AccountOperations.js]

                                                ❗❗❗ [DEPOSIT, WITHDROW, REQUEST LOAN, LOAN PURPOSE, PAY BACK] ❗❗❗

    ## ✅IX. The old way of connecting the REDUX with REACT//Connect API with Redux

Lesson 269

    ## ✅X. How to get the state/info's in to the component, another content

                                                ❗❗❗ [GETTING STATE TO COMPONENT] ❗❗❗
                                                          -in the old way-

[BalanceDisplay.js]

    ## ✅XI. -Making an API call with Redux THUNKS
           -How to convert money auttomatically from EUR to USD before we deposit the money/calling an API
           -How to create an asyncronous function/MIDLE WHERE

[store-V1.js] [accountSlice.js] [AccountOperations.js]
-also check the book to see how to install the REDUX and where to find the API for money converter

                                                ❗❗❗ [REDUX THUNK & CONVERTING MONEY] ❗❗❗

    ## ✅XII. How to add a "LOADING STATE" until the App gets the info's from API srv

[accountSlice.js]

                                                ❗❗❗ [LOADING STATE] ❗❗❗

    ## ✅XIII. How to install the REDUX DevTools

1)Search on Google "redux devTools"
2)Add to Chrome
3)Write in the Terminal: "npm i redux-devtools-extension"
4)Import {composeWithDevTools} from "redux-dev-tools extension"
5)Now check the REDUX tools from the browser console

[store-v1.js] inside of the file where is "Midleware"

                                                ❗❗❗ [REDUX DEVTOOLS] ❗❗❗

    ## ✅XIV. -How to update the REDUX TOOLKIT (RTK)
            -Let's update the "store-V1.js" file to (RTK)

1)Write in the Terminal: "npm i @reduxjs/toolkit"

[store-V2.js]

                                                ❗❗❗ [RTK REDUX TOOLKIT] ❗❗❗

             -How to create actions function with (RTK) Redux Toolkit
             -How to create the Account Slice

[accountSlice2.js] / Lesson 275

                                                ❗❗❗ [REDUX (RTK) ACCOUNT SLICE] ❗❗❗

             -How to use Thunks

                                                        ❗❗❗ [THUNKS] ❗❗❗

             -Another exemple about the REDUX TOOLKIT (RTK)

-Lesson 277

             -Context API vs REDUX

-PHOTO: Context API vs REDUX
-PHOTO: Context API vs REDUX2

             -Useful Resources-Lesson 280 (list on links)

# 32. React Router with Data Loading (FAST REACT PIZZA PROJECT)

    ## ✅I. How to use VITE to create an App/ How to install VITE

1)Open Terminal
2)Write "npm create vite@latest"
3)Select/write a name for the Project
4)Select REACT=>JS
5)Open Terminal and write: "npm i" => this will install the node modules
------------------------: "npm i eslint vite-plugin-eslint eslint-confin-react-app --save-dev" => Installing ESLINT
6)Create a new file named: ".eslintrc.json" in the same place as the "index.html" file.
-----------------Inside of ".eslintrc.json" write: {"extends":"react-app"}
7)Now go in the "vite.confing.js" file and write: "import eslint from "vite-plugin-eslint"" ...... export default defineConfig({plugins:[react(), eslint()]})
8)Write in the Terminal: "npm run dev" to start the App

    ## ✅II. How to plan and build a React App

-Lesson 283

    ## ✅III. How to set up/create a professional File Structure

-Lesson 284
-For more details about the Structure/Arhitecture of the files/folders of the App check the book or the Lesson 284 or the final project structure "The-Wild-Oasis"

    ## ✅IV. -A new way of Implementing Routes
              -How to implement Routes in a modern way

1)Open Terminal and write: "npm i react-router-dom@6" or latest
2)Search on Google "React Router" for documentation:
---------If we want to work with "data fetching" we must write: "create Browser Router"
---------Search on the React site at "Routers" and than "createBrowserRouter", or what content you need
3)Inside of the [App.jsx] type/write:
---------createBrowserRouter(...code...)
---------If auto import is not working than write at the top: "import {createBrowserRouter} from "react-router-dom""

[App.jsx]

                                                        ❗❗❗ [ALL ROUTES] ❗❗❗

    ## ✅V. How to build the App Layout/the content for App
    ## ✅VI. How to build an App/Layout for Big screens/desktop and mobiles

[AppLayout.jsx]/[Header.jsx]/[App.jsx]

                                                        ❗❗❗ [HEADER CONNECTION] ❗❗❗

    ## ✅VII. How to connect the "Layouts"/contents between them

[AppLayout.jsx] <Outlet/>

    ## ✅VIII. How to take/Fetch data from API with React Router "Loader"

[ Loader ]- we create a function that Fetches some data from an API
------------than we must provide that "Loader" function to one of our Routes

-Lesson 287 [Menus.jsx]/[apiRestaurant.js]/[MenuItem.jsx]

                                                        ❗❗❗ [LOADER FUNCTION] ❗❗❗

    ## ✅IX. How to display a Loadin Indicator

-First, to display and create this "Loading" state we must know where and how to place it.
[AppLayout.jsx]/[Loader.jsx]

                                                ❗❗❗ [LOADING INDICATOR/USE NAVIGATION] ❗❗❗

    ## ✅X. How to handle Errors with Error Elements

[App.jsx]/[Error.jsx]

                                                ❗❗❗ [HANDLING ERRORS] ❗❗❗

    ## ✅XI. How to create a "SEARCH" bar depending on ID search//Fetching orders

[SearchOrder.jsx]/[Header.jsx]/[App.jsx]

                                                ❗❗❗ [SEARCH BAR] ❗❗❗

    ## ✅XII. How to take data from the INPUT fields
    ----------How to write Data with React Router "Actions"

-Loaders = to read data
-Actions = to write/mutate data from the "loader"

[CreateOrder.jsx]/[App.jsx]

                                                ❗❗❗ [ROUTER ACTIONS] ❗❗❗

    ## ✅XIII. How to create a new order/command using the data's/info's from the previous lesson (React Router) actions

-Lesson 291

[apiRestaurant.jsx]/[CreateOrder.jsx]

                                                ❗❗❗ [CREATING A NEW ORDER] ❗❗❗

    ## ✅XIV. -How to handle Errors in Form Actions
    -----------How to disable a button after is clicked
    -----------How to handle an error like a phone number: ex: "asdefeacax" and not a real number

[CreateOrder.jsx]

                                                ❗❗❗ [ERRORS &&& BUTTONS] ❗❗❗
                                                    ❗❗❗ [PHONE ERROR] ❗❗❗

# 33. Tailwind CSS: Styiling the App ((FAST REACT-PIZZA PROJECT))

    ## ✅I. Settup/Install Tailwind CSS

1)Search on Google "Tailwind CSS"
2)Press the "Docs" button, up in the right corner
3)Press "Framework Guides"
4)Select "Vite" or what program you use
5)Copy the code from "Install Tailwind CSS"
6)Open a new Terminal an write:
---------"npm install -D tailwindcss postcss autoprefixer"
7)Now write this code to create a config file Tailwin CSS:
---------"npx tailwindcss init -p"
8)From the some site/page go to "Configure your template paths" and copy all the code after the:
---------content: [ "./index.html", " ./src/**/*.{js,ts,jsx,tsx}"]
---------And now go to the file that we just created earilier "tailwind.config.js" and replace the code at the "content", or replace it all with the content included
9)Now go on the page/site to "index.css" and copy all the code from there and paster in the CSS file (up at the top file):
---------@tailwind base;
---------@tailwind components;
---------@tailwind utilities;
10)In the Terminal:
---------"npm install -D prettier prettier-plugin-tailwindcss"
11)Create a new file in the parent Project folder, along side with the HTML file, named: "prettier.config.cjs"
12)In the "prettier.config.cjs" write:
---------"module.exports={plugins:[requier("prettier-plugin-tailwindcss")]}"
13)Always have the Documentation about Tailwind CSS open

    ## ✅II. How to write colors in Tailwind CSS

[Lesson 297]

    ## ✅III. Box Model: Spacing, Borders and Dispplay

-Lesson 298

    ## ✅IV. Responsive design at large/small screens

-Lesson 299 [Home.jsx]

                                                                 ❗❗❗ [MEDIA QUERIES] ❗❗❗

    ## ✅V. Using Flexbox

-Lesson 300

    ## ✅VI. CSS Grid

-Lesson 301

    ## ✅VII. Styling Buttons: Element State and Transition

[CreateOrder.jsx]/Lesson 302

    ## ✅VIII. Styling Form El/Input Fields

[SearchOrder.jsx]/ Lesson 303

    ## ✅IX. Reusing Styles with "@apply"

[index.css]/[CreateOrder.jsx]

    ## ✅X. Reusing Styles with React Components

Lesson 302

                                                                 ❗❗❗ [LINK BUTTON] ❗❗❗

    ## ✅XI. Absolut positioning, z-index and mpre

Lesson 306

    ## ✅XII. Configure Tailwind: Custom Family
    ## ✅XIII. How to customize codes in Tailwind/personalize classes

Lesson 307/[tailwind.congid.js]

    ## ✅XIV. Styling the Menu
    ## ✅XV. How to create a pizza that is SOLD OUT to look  different than the others

Lesson 308

    ## ✅XVI. Styling the Cart

Lesson 309

    ## ✅XVII. Styling the Order Form

[CreateOrder.jsx]/Lesson 310

# 34. Adding REDUX and Advanced REACT ROUTER/Connecting the STATES ((FAST-REACT-PIZZA-2 PROJECT))

    ## ✅I. How to install REDUX toolkit and react/redux:

-"npm i @redux.js/toolkit react-redux"

    ## ✅II. How to create the model User state with REDUX Toolkit

[userSlice.js]/[store.js]/[main.jsx]/[UserName.jsx]

                                                                 ❗❗❗ [REDUX USER] ❗❗❗

    ## ✅III. -How to type your name in the Inut FIELD and take it everywhere in the App/taking data from INPUT FIELD
              -How to update the user and how to display it in multiple places
              -How to check if the "user" was already identify himself if he's going back to the home page
              -How to set a value on an Input FIELD that can be change/a default value like a placeholder

[CreateUser.jsx]/[Home.jsx]/[Cart.jsx]/[CreateOrder.jsx]

                                                                 ❗❗❗ [UPDATE THE USER] ❗❗❗

    ## ✅IV. -Modeling the "Cart" state
             -How to create the "Cart"
             -How to make the "Cart" usable/to work
             -How to create functinality for:
                            -addItem
                            -deleteItem
                            -increaseItemQuantity
                            -decreaseItemQuantity
                            -clearCart

[cartSlice.js]/[store.js]

                                                                 ❗❗❗ [CREATING THE CART] ❗❗❗

    ## ✅V. -How to add Menu Items to the Cart shop
            -How to nicely format the price

[helper.js]

                                                                 ❗❗❗ [MENU ITEMS TO CART] ❗❗❗

    ## ✅VI. How to build the "Cart" overview with REDUX selectors

[MenuItem.jsx]/[Button.jsx]/[CartOverview.jsx]/[cartSlice.js]

    ## ✅VII. -Building the Cart Page content with REDUX connection/ connecting the Cart Page with the Menu items that was selected
              -How to implement the "Clear" button
              -Styling the link for going back

[Cart.jsx]/[cartSlice.js]/[EmptyCart.jsx]

                                                                 ❗❗❗ [BUILDING THE CART PAGE] ❗❗❗

    ## ✅VIII. -How to delete Items from the Cart
               -Deleting Cart Items
               -How to delete an item from the Menu only if this on is in the Cart/erasing the already selected item

[DeleteItem.jsx]/[CartItem.jsx]/[cartSlice.js]/[MenuItem.jsx]

                                                                 ❗❗❗ [DELETING CART ITEMS] ❗❗❗

    ## ✅IX. -Updating Cart Quantities
             -How to delete an Item if the User decrease the Quantity to 0

[UpdateItemQuantity.jsx]/[CartItem.jsx]/[Button.jsx]/[MenuItem.jsx]

                                                                 ❗❗❗ [UPDATING CART QUANTITIES] ❗❗❗

    ## ✅X. -Using the Cart for New Orders
            -How to create new Orders
            -How to clear the Cart after the Order was placed
            -How to create a "PRIORITY" checkbox that wil calculate 20% from the current price bill

[CreateOrder.jsx]/[cartSlice.js]

                                                                 ❗❗❗ [CREATING NEW ORDER] ❗❗❗

    ## ✅XI. -Redux Thunks with createAsyncThunk
             -GPS location, to make delivery easier
             -Geolocation for the App
             -How to fill an adress auttomatically when the User press a button
             -Integrating GEOLOCATION

[userSlice.js]/[Lesson322]/[Lesson323]/[CreateOrder.jsx]

                                                                 ❗❗❗ [GEOLOCATION] ❗❗❗

    ## ✅XII. -How to Fetch data without Navigation: "useFetcher"
              -How to extend child elements of an Parrent element with "useFetcher"

[Order.jsx]/[OrderItem.jsx]

                                                                 ❗❗❗ [FETCHING DATA] ❗❗❗

    ## ✅XIII. -Updating data without Navigation
               -How to display a "Button"/Priority even after the User already placed his Order
               -This Button will reload the entire Order Page, the final Price + Prioritym the Time and will display the status "Priority"

[UpdateOrder.jsx]/[Order.jsx]/[App.jsx]/[Lesson 325]

                                                                 ❗❗❗ [MAKE PRIORITY] ❗❗❗

    ## ✅XIV. ❗❗❗For Practice your skills check the Q & A from the Lesson 325, there you'l find more ideas for this App.❗❗❗

# 35. Setting Up Our Biggest Project + Styled Components + (SPA) Single Page Application ((WILD OASIS PROJECT))

    ## ✅I. How to Plan/Structure an Application

[Lesson327]

-SPA can be created with VITE

            -Libraryes to use on App:
                    -React Router:
                        -The standard for React SPA
                    -Styling:
                        -CSS right inside JS
                    -React Query:
                        -Best for remote state, cache, automatic re-fetching, pre-fetching, offline support, etc ...
                    -Context API:
                        -If in the App is no UI state needed than there is no use for REDUX, so on simple context with "useState" will be enough
                    -React HOOK Form:
                        -Handling bigger forms can be a lot of work, such as manual state creation an error handling. A library can simplify this
                    -Other tools:
                        -React icons/ React hot toast/ Recharts/ date-fns/ Supabase

    ## ✅II. -How to Sett up the Project: "Wild Oasis"
             -How to install VITE

1)Terminal: "npm create vite@lates"
2)Terminal: "npm i" - installing the modules
3)Terminal: "npm install --save-dev vite-plugin-eslint eslint-config-react-app eslint"
4)In the parent folder, alongside with the HTML file create the file: ".eslintrc.json"
5)In the file ".eslintrc.json" write: {"extends":"react-app"}
6)Inside of "vite.config.js" file write:
------------------------- import eslint from "vite-plugin-eslint" ==== export default defindeConfig ({plugins:[react(),eslint()]})

    ## ✅III. Introduction to Styled Components/How to install Styled Components

[Lesson330]/[App.jsx]

1)Terminal: "npm i styled-components"
2)For more info's check the book

                                                                 ❗❗❗ [Styled Components] ❗❗❗

    ## ✅IV. Global Styles with Styled Components

[GlobalStyles.js]/[Input.jsx]/[Button.jsx]

                                                                 ❗❗❗ [Styled Components] ❗❗❗

    ## ✅V. -Styled Component Props and the "CSS" Functions
             -Let's saay we want an element to act not only as an H1 el., but also as an H2 or H3 el
             -How to create reusable variable for more contents using Styled Components

[Heading.jsx]/[Row.jsx]/[Button.jsx]
-In the [Row.jsx] we can see how to create a variable where we can define morecontents styles by using Props

                                                                 ❗❗❗ [Styled Components] ❗❗❗

    ## ✅VI. Installing React Router and setting up the Routes of the App/How to install React Router

1)Terminal: "npm i react-router-dom@latest"
[App.jsx]

                                                                 ❗❗❗ [REACT-ROUTER ROUTES] ❗❗❗

    ## ✅VII. -Building the App Layout
               -How to create a SPA-connection between pages

[AppLayout.jsx]/[App.jsx]/[Header.jsx]/[Sidebar.jsx]

                                                                 ❗❗❗ [APP LAYOUT] ❗❗❗

    ## ✅VIII. Building the Sidebar and Main Navigation/ How to build the Main Navigation

[Sidebar.jsx]/[MainNav.jsx]

                                                                 ❗❗❗ [MAIN NAVIGATION] ❗❗❗

    ## ✅IX. -How to install React Icons Library
             -How to instal SVG Icons with React

1)Terminal: "npm i react-icons"
2)For doc search: "react icons"
3)Go to the "React Icons" page
4)In the hamburgher Menu go to HeroIcons2
5)Copy the "Import ... code ..."
6)Paste the code in the file where is needed
7)Now go back to the web page and click the Icon that you want, this will auttomatically copy the Icon code
8)Paste the copy code/name of the Icon in the Imported code from step 5): "import { ... here ... } from "react-icons/hi2""
9)Now write the Icon name where is needed, for ex: <HiOutlineHome/> 🏠

[MainNav.jsx]

    ## ✅X. -Supabase Crash Course: Building a Back-End
            -Data base
            -How to build a full-stack App
            -Plan App data
            -Model relationships between data tables
            -Load data into the App via Supabase API
            -How to quickly create a backend for Projects:
                            -creating User authentification
                            -file storage
                            -accesible from an API
                            -etc...

    I)Creatin a New Database

1)Search: "supabase.com"
2)Create account
3)Create new project = Milici Ilie's org
4)Generate a password/In our case check the pass in the "tips" file Word doc from "React projects"
5)Choose the Centrail EU(Frankfurt)
6)Now go to the "table editor" in the sidebar left ->

    ## ✅XI. -Modeling App state
             -How to create the Supabase back-end
             -What to consider when create the back-end
             -Logic creating the back-end
             -How to connect (id, email ... ) Guest with another content (id, name, etc...) cabin table

[Lesson.340]

    ## ✅XII. How to create Tables/ Creating Tables with data that we need for our App

[Lesson.341]

    ## ✅XIII. Relationships between Tables/ How to connect Tables in Supabase, ex:

                ->User TABLE  =>
                                =>connected -> Bookings TABLE
                ->Guest TABLE =>

[Lesson.342]

    ## ✅XIV. -Adding Security Policies (RLS)
              -How to secure the Back-end Supabase server

[Lesson.343]

    ## ✅XV. Connecting Supabase with our React App

1)Open Terminal: -"npm install --save@supabase/supabase-js" OR "npm install @supabase/supabase-js" => [supabase.js]/[apiCabins.js]
2)In the [supabase.js] file copy the code from: -"API docs => Introduction (getting started)"
-"Initializing (import ... code ...)"
3)Take the API key:
-"Setting => API => anon public => copy"

4)Paste in the file/replace: "const supabaseKey = "... here ...""

    ## ✅XVI. Setting up Storage Buckets

[Lesson.345]

# 36. REACT QUERY: Managing Remote State

    ## ✅I. Setting Up React Query/ Installing React Query

1)Open Terminal: "npm i @tanstack/react-query@latest"
1)Open Terminal: "npm i @tanstack/react-query-devtools@4"

[App.jsx]

                                                                 ❗❗❗ [SETTING UP REACT QUERY] ❗❗❗

    ## ✅II. -Fetching Cabin Data
             -How to Fetch/take Data with React Query
             -J.S. library that take cares of days/dates an hours in App
             -What is "Fns" and how to use it

[Cabin.jsx]/[CabinTable.jsx]/[CabinRow.jsx]

                                                                 ❗❗❗ [FETCHING CABIN DATA] ❗❗❗

    ## ✅III. How to create calendars/dates/days/hours/etc.

1)Terminal: "npm i date-fns"

                                                                 ❗❗❗ [FETCHING CABIN DATA] ❗❗❗

    ## ✅IV. -Mutations: Deleting a Cabin/Element
              -How to automatically re-render a User interface
              -How to create a DELETE button with React Query
              -How to handle Errors with React Query

[apiCabins.js]/[CabinRow.js]

-How to delete ROWS/items with Supabase/back end => API Docs => Tables & Views => Delete rows or any
[Lesson.350]

                                                                 ❗❗❗ [DELETING AN ELEMENT] ❗❗❗
                                                                   ❗❗❗ [HANDLING ERRORS] ❗❗❗

    ## ✅V. -Displaying Toasts (Notifications)
            -How to INSTALL React Hot Toast (Notifications alert)
            -How to display animations alerts when there is a succes or an error

                         === Installing Toast: Terminal: "npm i react-hot-toast"

[App.jsx]/[CabinRow.jsx] === On google search "react hot toast (documentation)"

                                                                   ❗❗❗ [REACT TOASTER] ❗❗❗

    ## ✅VI. -Introducing another library: React HOOK Form
             -Library that handle form submision, for errors, etc
             -How to create a Form that creates a new content
             -How to install REACT HOOK FORM

1)Terminal: "npm i react-hook-form@7"
[Cabin.jsx]/[CreateCabinForm.jsx]

                                                                   ❗❗❗ [REACT HOOK FORM] ❗❗❗

    ## ✅VII. -Creating a new Cabin/ Content
               -How to create a new Content/Cabin after completing the Input Fields

[apiCabins.js]/[Lesson.353]/[CreateCabinForm.jsx]

                                                                   ❗❗❗ [CREATING NEW CABIN] ❗❗❗

    ## ✅VIII. -Handling Form Erros
                -How to make the App. to stay Fix and only a specific content/layout to scrool (overflow x - y)
                -How to create Required Input Fields/obligatoriu, ex: (This Input Field is required!!)
                -How to make "Discount" by default always lower than the price/"getValues" Hook from React Query

[CreateCabinForm2.jsx]/[FormRow.jsx]

                                                                   ❗❗❗ [FORM ERRORS] ❗❗❗

    ## ✅IX. -How to take "errors" from the console and siiplay it in the App./ "formState" Hook from React Query
             -Refactoring the <Form...>

[FormRow.jsx]/[CreateCabinForm1.jsx]

    ## ✅X. -Uploading Images to Supabase
             -How to upload Images from PC
             -Supabase Docs about uploading IMG's
             -How to automatically delete the Cabin/Content if the IMG didn't uploaded successfuly/correctly

[CreateCabinForm1.jsx]/[FileInput.jsx]/[apiCabins.js]/[Lesson.355]

                                                                   ❗❗❗ [UPLOADING IMAGES] ❗❗❗

    ## ✅XI. -Editing a Cabin/Content
              -Creating the "EDIT" Button
              -How to Edit the Content that was already created

[CabinRow.jsx]/[CreateCabinForm.jsx]/[Lesson.356]/[apiCabins.js]

                                                                   ❗❗❗ [EDITING A CABIN] ❗❗❗

    ## ✅XII. -Abstracting React Query into Custom HOOKS
               -Refactoring

[useDeleteCabin.js]/[Lesson.357]

                                                                   ❗❗❗ [REFACTORING] ❗❗❗

    ## ✅XIII. -Duplicate cabins/content
                -How to clone a cabin/content

[CabinRow.jsx]/[Lesson.358]

                                                                   ❗❗❗ [DUPLICATE CABIN] ❗❗❗

    ## ✅XIV. Fetching App. Settings

[apiSetting.js]/[UpdateSettingForm.jsx]/[useSettings.js]

                                                                   ❗❗❗ [FETCHING APP SETTINGS] ❗❗❗

    ## ✅XV. Updating Application Settings

[useUpdateSetting.js]/[Lesson.360]

                                                                   ❗❗❗ [UPDATING APP SETTINGS] ❗❗❗

# 37. Advanced React Pattern/PATTERN ARE VERY IMPORTANT - FOR BIGG APPLICATIONS

    ## ✅I. How to create Reusable codes in React

[Lesson.362]

    ## ✅II. How to create a list with an arrow showing down for OPEN and also a button for SHOW LESS

[Lesson.363] (sanbox code)

    ## ✅III. The Render Props Pattern

    ## ✅IV. How to create Tables, reusable Tables, buttons for show less, etc

[Lesson.364]

# 38. Implementing More Features: Authentification, Dark Mode, Dashboard, etc

    ## ✅I. -Client-Side Filtering: Filtering Cabins/Sort
             -How to filter the list: Discount -> No discount, low price, high price, etc
             -How to create/ reorganized Button list
             -Filter the list by discount or price
             -Storing the Filter State inside of the URL
             -Sort by discount or price

[CabinTableOperations.jsx]/[Cabin.jsx]/[CabinTable.jsx]/[Filter.jsx]

                                                                   ❗❗❗ [SORT/FILTER DISCOUNT & PRICE] ❗❗❗

    ## ✅II. -How to build a Modal Window
              -How to POP-UP a content when pressing a Button
              -Modal Window content using React Portal
              -How to render a Modal Window anywhere

[Modal.jsx]/[Cabins.jsx]/[AddCabin.jsx]/[CreateCabinForm.jsx]/[Lesson.367]

                                                                   ❗❗❗ [MODAL WINDOW] ❗❗❗

    ## ✅III. How to convert the Modal to a Compound Component (for more info's ask CHAT GPT)

[AddCabin.jsx]/[Modal.jsx]/[Lesson.368]

                                                                   ❗❗❗ [CONVERTING TO COMPOUND COMPONENT] ❗❗❗

    ## ✅IV. -Detecting a Click Outside the Modal
              -How to make this HOOK a Custom HOOK, reusable Modal

[Modal.jsx]/[useOutsideClick.js]

                                                                   ❗❗❗ [CLICK OUTSIDE THE MODAL] ❗❗❗

    ## ✅V. -Confirming Cabin Deletions
             -How to implement Reusable Modal for deletions
             -How to create Question before DELETE
             -Question YES or NO for Delete

[CabinRow.jsx]/[ConfirmDelete.jsx]

                                                                   ❗❗❗ [CABIN DELETIONS] ❗❗❗
                                                                   ❗❗❗ [QUESTION DELETE] ❗❗❗

    ## ✅VI. -Building Reusable Table
              -How to create a Reusable content/table with Compound Component

[CabinTable.jsx]/[Table.jsx]/[CabinRow.jsx]

                                                                   ❗❗❗ [RESUABLE TABLE] ❗❗❗

    ## ✅VII. -Building Reusable Context Menu
               -How to implement functionality: witch item/content from a list is opened at this time

[Menus.jsx]/[CabinTable.jsx]/[Lesson373]/IMPORTANT ===advanced content===

                                                                   ❗❗❗ [REUSABLE MENU] ❗❗❗

    ## ✅VIII. -Reusble Component
                -Client-side Sorting: Sorting Cabins
                -How to Sort a list of items depending on the: Cabin, capacity, price, discount, free, or any other values
                -Drop down filter menu/conent
                -How to sort a list Ascending or Descending

[SortBy.jsx]/[CabinTableOperations.jsx]/[Select.jsx]/[Lesson.376]/[CabinTable.jsx]

                                                                   ❗❗❗ [SORTING THE CABINS] ❗❗❗

    ## ✅IX. Build the Booking Table

[Sidebar.jsx]/[Lesson.378]

                                                                   ❗❗❗ [SAMPLE DATA UPLOADING] ❗❗❗

    ## ✅X. -API -Side Filtering: Filtering Bookings
             -Filtering list items from/with API

[BookingTableOperations.jsx]/[Bookings.jsx]/[apiBooking.jsx]/[useBookings.js]/[Lesson.379]

                                                                   ❗❗❗ [FILTERING BOOKINGS] ❗❗❗

    ## ✅XI. API -Side sorting: Sorting Bookings

[useBookings.js]/[apiBookings.js]

                                                                   ❗❗❗ [SORTING BOOKINGS] ❗❗❗

    ## ✅XII. -Building a Reusable Pagination Component === IMPORTANT ===

[Pagination.jsx]/[BookingTable.jsx]

                                                                   ❗❗❗ [REUSABLE PAGINATION] ❗❗❗

    ## ✅XIII. -API -Side Pagination: Paginating Bookings
                -Changing content/page

[BookingTable.jsx]/[apiBookings]/[useBookings]/[contents.js]/[constans.js]

                                                                   ❗❗❗ [PAGINATING BOOKINGS] ❗❗❗

    ## ✅XIV. -Prefetching with React Query
               -Better use experience
               -How to load the next page/element before access it
               -How to load automatically previous/next pages for a better experience

[useBookings.js]

                                                                   ❗❗❗ [PREFETCHING] ❗❗❗

    ## ✅XV. -Building the Single Booking Page
              -How to creat a menu for Booking Page
              -How to create a 3 dots ... Menu for more details

[BookingRow.jsx]/[App.jsx]/[Booking.jsx]/[BookingDetail.jsx]/[Lesson.384]/[useBooking.js]

                                                                   ❗❗❗ [SINGLE BOOKING PAGE] ❗❗❗

    ## ✅XVI. -Checking In a Booking
               -How to check in the guests when they arrive
               -How to check some contents
               -How to add optional Breakfast/element to a Booking Menu
               -How to add a new value to an existing one/Breakfast from above
               -How to update Booking/Element/Content when the Button "Check In" is pressed
               -How to do a mutation that will check and change elements, for ex: isPaid, status, etc ...

[Lesson.385]/[BookingRow.jsx]/[BookingDetail.jsx]/[App.jsx]/[CheckIn.jsx]/[CreckingBooking.jsx]/[useCehckin.js]/[apiBooking.js]

                                                                   ❗❗❗ [CHECKING IN THE GUESTS] ❗❗❗

    ## ✅XVII. -Adding Optional Breakfast
                -Adding a checkbox optional choice for Breakfast

[CheckinBooking.jsx]/[useCheckin.jsx]

                                                                   ❗❗❗ [OPTIONAL BREAKFAST] ❗❗❗

    ## ✅XVIII. -Checking out a Booking/guest
                 -Check out the room once the guest leave

[BookingRow.jsx]/[useCheckout.js]/[BookingDetail.jsx]

                                                                   ❗❗❗ [CHECK OUT BOOKING] ❗❗❗

    ## ✅XIX. Deleting a Booking

[BookingRow.jsx]/[useDeleteBooking.js]/[Lesson.388]/[BookingDetail.jsx]

                                                                   ❗❗❗ [DELETING A BOOKING] ❗❗❗

    ## ✅XX. Authentication: User Login with Supabase

[LoginForm.jsx]/[useDeleteBooking.js]/[Lesson.388]/[BookingDetail.jsx]

                                                                   ❗❗❗ [AUTHENTICATION - LOG-IN] ❗❗❗

    ## ✅XXI. -Authentication: Protecting Routes
               -Only logged in users can acces our App.
               -How to block unlogged user to acces the App.

[ProtectedRoute.jsx]/[App.jsx]/[ApiAuth.jsx]/[useUser.jsx]/[Lesson.390]/[LoginForm.jsx]

                                                                   ❗❗❗ [AUTHORIZATION] ❗❗❗

    ## ✅XXII. User Logout

[Logout.jsx]/[Header.jsx]/[apiAuth.js]/[useLogout.js]

                                                                   ❗❗❗ [USER LOGOUT] ❗❗❗

    ## ✅XXIII. -How to build the SIGN UP form
                 -How to create new users accounts

[users.jsx]/[SignUpForm.jsx]/[Lesson.393]

                                                                   ❗❗❗ [SIGN UP ACCOUNTS] ❗❗❗

    ## ✅XXIV. -User Sign Up
                -Reusable Sign Up Code for another App
                -How to confirm Email after creatin an account in Supabase

[apiAuth.js]/[useSignUp.js]/[SignUpForm.jsx]/[Lesson.394]/IMPORTANT

                                                                   ❗❗❗ [USER SIGN UP] ❗❗❗

    ## ✅XXV. -Authorization on Supabase:Protecting Database (RLS)
               -How to block malicious actors/hackers
               -How to create security

[Lesson.395]

    ## ✅XXVI. -Building the App. Header
                -Header with the:Username, avatar, and a small menu

[HeaderMenu.jsx]/[Lesson.396]/[UserAvatar.jsx]/[Header.jsx]

                                                                   ❗❗❗ [APP HEADER] ❗❗❗

    ## ✅XXVII. -Updating User data and Avatar
                 -Update Username, email, password
                 -How to change User name, picture/avatar, email, password, etc...

[Lesson.397]/[Accounts.jsx]/[UpdateUserForm.jsx]/[ApiAuth.jsx]/[useUpdateUser.jsx]/[UpdatePasswordForm.jsx]

                                                                   ❗❗❗ [UPDATING USERDATA & AVATAR] ❗❗❗

    ## ✅XXVIII. -Implementing Dark Mode with CSS varaibles
                  -How to check if a class is active or not

[GlobalStyles.js]/[DarkModeToggle.jsx]/[HeaderMenu.jsx]/[DarkModeContext.jsx]/[Lesson.398]/[Logo.jsx]

                                                                   ❗❗❗ [DARK MODE] ❗❗❗

    ## ✅XXIX. Dashboard Layout/ Building the Home page

[DashboardLayout.jsx]/[Dashboard.jsx]

                                                                   ❗❗❗ [DASHBOARD] ❗❗❗

    ## ✅XXX. -Computing Recent Bookings and Stays
               - How to check/create the Bookings in present or future (in 2 months, 6 months or 1 year), and how to check the stays/ check in
               - booking => actual sale
               - stays => a guest checked in the HOTEL

[apiBooking.js]/[useRecentBookings.js]/[Lesson.400]/[useRecentStays]

                                                                   ❗❗❗ [BOOKINGS AND STAYS] ❗❗❗

    ## ✅XXXI. Displaying statistics on:
                            -recent bookings
                            -recent sales
                            -check-ins
                            -total occupancy rate

[Stats.jsx]/[DashboardLayout.jsx]/[Stat.jsx]/[Lesson.401]

                                                                   ❗❗❗ [DISPLAYING STATISTICS] ❗❗❗

    ## ✅XXXII.  -Displaying a Line Chart with the Recharts Library
                  -How to create a diagram/statistics 📈

[Lesson.402]/[SalesChart.jsx]/[DashboardLayout.jsx]

                                                                   ❗❗❗ [DISPLAYING LINE CHART] ❗❗❗

    ## ✅XXXIII. -Displaying a Pie Chart
                  -Circle diagram with Recharts Library

[Lesson.403]/[DurationChart.jsx]/[DashboardLayout.jsx]

                                                                   ❗❗❗ [DISPLAYINHG PIE CHART] ❗❗❗

    ## ✅XXXIV. -Displaying Stays for Current Day
                 -Displaying check-in and check-out for Current Day

[TodayActivity.jsx]/[DashboardLayout.jsx]/[Lesson.404]/[apiBookings.js]/[useTodayActivity.js]/[TodayItem.jsx]/[CheckoutButton.jsx]

                                                                   ❗❗❗ [STAYS] ❗❗❗

    ## ✅XXXV. -How to Fix errors with ERROR BOUNDARIES
                -How to INSTALL Error Boundary

[Lesson.405]/[main.jsx]/[ErrorFallback.jsx]

1)Terminal: "npm i react-error-boundary"
2)Check documantion about

                                                                   ❗❗❗ [ERROR BOUNTARIES] ❗❗❗

    ## ✅XXXVI. -How to open a menu and how to close it when click on a button
                 -How to fetch Data/App. to auttomatically open in the DarkmMODE if the user/guest have this sett in

[DarkModeContext.jsx]

                                                                   ❗❗❗ [AUTO DARK MODE] ❗❗❗

    ## ✅XXXVII. -How to deploy for productionon the Netlify of Vercel

[Lesson.408]

    ## ✅XXXVIII. How to use GIT

[Lesson.409]

1)Terminal: "git init"
2)Terminal: "git status"
3)Create file: "readme.md" - description of the project
4)Terminal: "git add -A" - will add the files/prepare
5)Terminal: "git commint -m 'Initial commit'" - saving the files
6)Create a new Empty Repository on the GIT HUB site
7)Go to that repository and copy the link from "... or create a new ...", git remote add origin ...HERE...
8)Terminal: "git remote add origin LINK" - LINK => is the link from the previous step
9)Terminal: "git push -U origin name" - name => name of the project that was given to the repository
-This name you can take it from the left-bottom corner in VS CODE
10)After making some new changes write in the Terminal: "git add -A"
11)Terminal: "git commit -m 'Update readme'" -readme, or any name file that you modified. =>This is how we prepare our file/s to be imported
12)Terminal: "git push -u origin name" - name => the name of repository from step 9, from above

    ## ✅XXXIX. Deploying the App with Vercel

[Lesson.410]

    ## ✅XL. subtitlu

# 39. Titlu

# 40. Titlu
