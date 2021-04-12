# CodersCamp 2020 - React.js Project

**The project was created as part of the 6th edition of the [CodersCamp](https://coderscamp.pl/) course.**

If you want to see demo of our project [click here]().

Our project uses the REST API that we created during the previous project. You can find it [here](https://github.com/ruljin/CodersCamp2020.Project.NodeJS-Express-TypeScript.MyPlants).

## Table of Contests
-  [The project team](#the-project-team)
-  [General info](#general-info)
-  [Features](#features)
-  [Technologies](#technologies)
-  [Setup](#setup)
-  [Organization of work](#organization-of-work)

## The project team
Authors of this project are course participants who worked under the supervision of an experienced mentor.

**Authors:**
-  [Dominik Puchała](https://github.com/Suegro24) (Tech Lead)
-  [Kamila Grusza](https://github.com/kami3la) (Development Manager)
-  [Weronika Brzeczkowska-Kuzianik](https://github.com/brzeczkowskaw) (Product Owner)
-  [Adrianna Krupa](https://github.com/adax10/)
-  [Jędrzej Ratajczak](https://github.com/Mrozelek)
-  [Konrad Mierzejewski](https://github.com/KonradMierzejewski)

**Mentor:**  [Filip Kuca](https://github.com/ruljin)

## General info
Our application is called **MyPlants**.

It is an application for plant lovers. The idea of it is to create a collection of many plant species which can be owned at home with its description and tips how to take care of them. And then users can share their plants as well as experience with taking care of them with other users.

## Features
- User can create their profil and login. And if someone is not logged in, there are a limited number of pages they can see and actions they can take.
<p align="center">
    <img  src="https://res.cloudinary.com/dyj4k9tr0/image/upload/v1618226434/login_wqb2ri.png"  width="45%" />
    <img  src="https://res.cloudinary.com/dyj4k9tr0/image/upload/v1618226475/register_nfg55w.png" width="45%" />
</p>
- There is a plant database, where each plant has its own subpage with a description of its growing requirements. There is also a comments section where the user can add a comment and like a comment if he wishes (comments will be displayed according to the numeber of likes).
<p align="center"><img  src="https://res.cloudinary.com/dyj4k9tr0/image/upload/v1618226570/plant_zt8ijs.png" width="650" height="350" /></p>
- The main page is the plant finder, which by default shows 3 example plants in the database. You can search for a plant by its name or set search criteria according to care requirements. If the user does not find the plant he was looking for, he can add it to the database. For this purpose, he has to complete the profile of the plant and send it, and the website administrator will consider its application and approve or delete it (only the administrator has access to the subpage with unapproved plants).
<p align="center">
    <img  src="https://res.cloudinary.com/dyj4k9tr0/image/upload/v1618226558/glowna_vebr5s.png"  width="45%" />
    <img  src="https://res.cloudinary.com/dyj4k9tr0/image/upload/v1618226565/admin_ohrncv.png" width="45%" />
</p>
- Each user has his own profile, which is called 'My garden' and it includes:
    - Garden - user can create profiles for the plants he has at home. He can name his plants, add pictures of them and description.
    - Journal - user can also create public or private (visible only to the owner) notes, which are kind of a journal about taking care of his plants.
    - Favorite users - user can add other User's profiles to their favourites, so he can follow their plants.
    - Settings - user can change his account details.
<img  src="">
- There is a chat created, where are two channels:
    - **Main chat** - for general discussion about plants, where users can ask questions or share their experience. It opens by default.
    - **Trade your plants** - dedicated for trade. Users can sell or exchange their plants or equipment.
<img  src="">
- We have created not only a plant search engine, but also a user search engine, which is located on a separate subpage.
<img  src="">
- There is also a calendar on our website where users can add events - for example reminders to water their plants.
<img  src="">

## Technologies & Tools
- ReactJS
- SCSS
- ESLint
- StyleLint
- Jest
- Jira
- Scrum
- Figma
- Discord

## Setup
#### Getting started
If you want to run the application on the local machine, follow these steps:
1. Clone down this repo
2. Install dependencies with the command: `yarn`
3. Start development server `yarn start`
The application will be available at `localhost:3000/`

#### Running tests
To run the application tests, follow these steps:
1. Install dependencies with the command: `yarn` (if you haven't already done so before)
2. Run the tests by running the command: `yarn test`

## Organization of work
#### Discord
Most often we communicated using the Discord application, where we created organizational meetings and were in constant contact to establish future plans, exchange opinions and help each other.

#### Figma
Using Figma, we created our own prototype of a user interface adapted to Desktop, and also made a version adapted to display on Phones. All designs can be viewed here. [here](https://www.figma.com/file/Mjn1scT6LfnzUi2QyBKMdy/MyPlants?node-id=0%3A1).

#### Jira
We used Jira, where we organized all our work. More precisely, we shared responsibilities for each sprint, exchanged comments and approved our tasks.