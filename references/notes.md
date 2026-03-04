Components

Component Hierarchy

# Functional Component

1. Functional Component with named fn [done]
2. Functional Component with Anonymous fn [done]
3. Functional Component with Arrow fn [done - recommended]

## Core concepts of ReactJS

1. Props [done]
2. States [done]
3. Events [done]
4. Conditional Rendering [done]
5. Lists & Keys [done]

## other important concepts

1. Routing [done]
2. Data Binding [done]
3. Connecting to REST API [done]
4. Hooks
5. Forms [done]
6. State Management
   using context api
   using using rtk

====

Home /
Contact Manager /contacts
About /about
Counter /counter

===
Sharing Data between components

---

1. Parent to Child Component Commn
   using Props

2. Child to Parent Component Commn
   using Props and events

3. Any to Any Component Commn
   either using React Context API (or)
   by using Redux Toolkit (RTK) / Zustand

# States

- component-wide updateable data

===
Hooks
===
useState
useEffect
useRef
useContext

===
Any to Any Component Commn using Context API
==
Step 1: Create Context
import { createContext } from 'react';

      const PlaylistContext = createContext();

Step 2: Provide the Context to the necessary components
Step 3: Update the context
Step 4: Receive it in the desired component and display
useContext(PlaylistContext)
