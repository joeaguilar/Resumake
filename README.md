# Resumake
## An application to make display a resume

This app requires you to have [Node.js](http://nodejs.org/ "Nodejs homepage") installed 


To use: 

`git clone `

into a directory, then make sure to

`npm install`

modify the social links in
`views/includes/navigation.jade`

```jade
//example
a(href="https://github.com/psychojoe" target="_blank")
								span.glyphicon.glyphicon-qrcode
								span &nbsp;| Github
```
to

```jade
//changed example
a(href="https://github.com/SOMEUSER" target="_blank")
								span.glyphicon.glyphicon-qrcode
								span &nbsp;| Github
```

then create a directory called "data" in the main directory and create "info.json" and "skills.json" with the following format

```javascript
//Skills.json
[
  {
    "name": "SKILL_NAME", "percent":"55",
    "name": "SKILL_NAME_TWO", "percent":"43",
  }
]
```
```javascript
//info.json
{
  "personal": {
    "firstname": "John",
    "lastname": "Doe",
    "phonenumber": "312.555.1234",
    "title": "Web Design and Development",
    "email": "me@email.com",
    "website": "http:\/\/www.mywebsite.com",
    "address": "1234 N State St Chicago, IL 60611"
  },
  "education": [
    {
      "school": "My First College",
      "address": "123 Main St. Seattle, Washington 55555",
      "loc": "https:\/\/www.google.com\/maps\/place\/Seattle,+WA\/@47.614848,-122.3359059,11z\/data=!3m1!4b1!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a",
      "phone": "947-555-9000",
      "website": "http:\/\/www.madeupschool.edu",
      "dates": {
        "from": "Fall 2007",
        "to": "Spring 2011"
      },
      "focus": "Design and Multimedia",
      "graduated": "Spring 2011",
      "degree": "Bachelors of Awesome Things"
    },
    {
      "school": "School of the Art Institute of Chicago",
      "address": "E Monroe St, Chicago Loop, IL 60603",
      "loc": "https:\/\/www.google.com\/maps\/place\/E+Monroe+St,+Chicago,+IL\/@41.8800503,-87.6225492,17z\/data=!4m2!3m1!1s0x880e2ca6b79e7b2b:0xb6813b5d2e8f5afd",
      "phone": "800.232.7242",
      "website": "http:\/\/www.saic.edu\/",
      "dates": {
        "from": "Fall 2011",
        "to": "Spring 2014"
      },
      "focus": "Art and Technology",
      "graduated": "Spring 2014",
      "degree": "Masters of Fine Arts"
    }
  ],
  "experience": [
    {
      "name": "Starbucks",
      "address": "1912 Pike Place Seattle, WA 98101",
      "loc": "https://www.google.com/maps/place/Starbucks/@47.610101,-122.342502,11z/data=!4m5!1m2!2m1!1sSeattle,+WA+starbucks!3m1!1s0x54906ab2c538c70b:0x11ebfd9ae22719cf",
      "phone": "206.448.8762",
      "website": "http://www.starbucks.com/store/11676",
      "dates": {
        "from": "Spring 2008",
        "to": "Summer 2011"
      },
      "position": "Barista",
      "roles": [
        "Made tasty drinks",
        "Increased sales by 25% by building repertoire with regulars ",
        "Maintained a clean work area"
      ]
    },
    {
      "name": "Big Bowl",
      "address": "60 East Ohio Chicago, IL 60611",
      "loc": "https:\/\/www.google.com\/maps\/place\/60+E+Ohio+St,+Chicago,+IL+60611\/@41.8924927,-87.6262482,17z\/data=!3m1!4b1!4m2!3m1!1s0x880e2cadabbdb409:0xcddb923cf17a5f43",
      "phone": "312.951.1888",
      "website": "http:\/\/bigbowl.com\/",
      "dates": {
        "from": "November 2012",
        "to": "June 2014"
      },
      "position": "Server",
      "roles": [
        "Thoroughly trained new employees for both catering and serving procedures",
        "Decreased waste and increased capacity for catering orders by over 25%",
        "Worked directly with management to implement new procedures for all outgoing orders"
      ]
    }
  ],
  "awards": [
    "Received a merit-based scholarship to attend The School of the Art Institute.",
    "Featured in the cover of National Geographic",
    "Received awards and employee incentives for consistently providing excellent service, training new employees, and up selling specials at Big Bowl"
  ],
  "internships": [
    {
      "name": "GiantTechStartup",
      "contractor": "Jane Smith",
      "position": "Web developer",
      "website": "http:\/\/www.gianttechstartup.org\/",
      "address": "E Monroe St, Chicago Loop, IL 60603",
      "loc": "https:\/\/www.google.com\/maps\/place\/E+Monroe+St,+Chicago,+IL\/@41.8800503,-87.6225492,17z\/data=!4m2!3m1!1s0x880e2ca6b79e7b2b:0xb6813b5d2e8f5afd",
      "dates": {
        "from": "Winter 2012",
        "to": "Spring 2013"
      },
      "roles": [
        "Assisted in production of coffee for staff",
        "As a go between, inspected over 10,000 lines of css code",
        "Prepared meeting arrangements for optimal aesthetic pleaseability"
      ]
    }
  ]
```
And you'll be all set!

P.S. Go ahead and press `cmd + p` to view a print preview
