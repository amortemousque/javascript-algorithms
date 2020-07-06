
There's a fine line between diversity that add value and chaos\
Loosely couple architecture need very strict rules

# Clarifying questions

Metrics questions:

- How many user should we expect in the same time?
- How many active user do we have?
- What is the speed we want to achieve?
- How critical is availability, how much money are we gonna lose is the system is down for 5 minutes?
- Do we care about SEO?

Domain relative question:

- Do we need a real time app?
- Notification in app
- Sensors

# Micro frontend architecture

## Why

Pros

- Team work only on subdomain (separation of concern)
- Technology Agnostic
- Isolate Team Code (Decoupling, less dependance)
- Build a Resilient Site (avoid single point of failure): A javascript error will impact only on micro frontend
- Scale horizontally
  
Cons

- Need of create shared configuration, test, deployment etc.. that can work with all the tech stack we are using: 
  - Need cross functional teams: Responsible  to chip the product
- Have a complexity to wrap your application
- No really well the domain in order to split the software
  - Need a domain expert to split the app
- Consistency (Design system)
  - Guidelines and design system

## Guidlines

- Agree on naming conventions where isolation is not possible yet. Namespace CSS, Events, Local Storage and Cookies to avoid collisions and clarify ownership.
- Favor Native Browser Features over Custom APIs
- Use Browser Events for communication instead of building a global PubSub system. If you really have to build a cross team API, try keeping it as simple as possible.

# State management

![](https://i0.wp.com/christianlydemann.com/wp-content/uploads/2018/06/93da0a4e-93fe-41b6-bcaa-1ded32445fd5-327-0000007d9ac202bd.jpg?w=919&ssl=1)

Pros:
- Separation of concern
- Shared data between component without encapsulation
- Cache data between routes
- Predictable
- Debugging

Cons
- Boilerplate



# Monoripository

- Visibility Easier for the cross functional teams to work. Overview of the entire application
- Collaboration: Every one can access the code and share valuable infos or examples
- Sharing build system: (Speed, consistency) Scripting, one action to make a change across multiple projects. Share config, shared linters, shared test logics, metrics without to support packages.
- Enforce convention is easy. Linter etc.
- Cross project changes: (Speed, consistency)on one pull request. All the team can discuss in one place. And single deployment
- Rollback is easier

# Design System

A Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.

Design: Layout, Color, Typo, Motion
Components: Usage, Anatomy, Placement, Behavior

## Atomic design

![](https://miro.medium.com/max/2000/1*V5oi-JrH4RlEQuYdVrQXig.png)

The more tiny a component is the more reusable

> Atom: Stateless (Dump component /  Presenter component) \
> Rely on attributes, events


> Pages: Stateful (Smart component / Container component) \
> Rely on state

Higher order component & Component render callback

## Toolkit

