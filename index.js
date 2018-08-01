class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    verticalDistance = Math.abs(beginningLocation.vertical - endingLocation.vertical);

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    horizontalDistance = 
  }

  estimatedTime(blocksTravelled, peakHours) {

  }
}
