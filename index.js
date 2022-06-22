// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    if (blocks <= 42){
        return (42 - blocks)
    }

    if (blocks > 42){
        return (blocks - 42)
    }
}

function distanceFromHqInFeet(feet){
    distanceFromHqInBlocks(feet)
        if (feet <= 42){
            return (42 - feet)*264
        }

        if (feet >= 42){
            return (feet - 42)*264
        }
    
}

function distanceTravelledInFeet(distance, destination){
    if (distance <= destination){
        return (destination - distance)*264
    }

    if (destination >= destination){
        return (distance - destination)*264
    }
}

function calculatesFarePrice(start, end){
    function farePrice(fare){
        if (start <= end){
            (end - start)*264 === fare
            if (fare <= 400){
            return 0
            }
            } else {
                return (fare - 400)*.02
            }
    }
}
