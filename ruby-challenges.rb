# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# make a method named wordsArray that takes in the beverages array and the letters string 
# iterate through the array // use array.select to find the words with the letters string
# select the words containing the letter string // use value.include?  
# output should match the given expected output 

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def wordsArray (array, string)
    array.select do |value|
        value.include? (string)
    end
end
p wordsArray beverages_array, letter_o
p wordsArray beverages_array, letter_t

# output ---> 
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# create a variable that takes in the array of numbers 
# use the .sum to add the numbers in the array 
# output should match the given expected output 

nums_array1 = [42, 7, 27]
# Expected output: 76
nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum numArray
    numArray.sum
end

#seems too easy but it works 

p sum nums_array1
p sum nums_array2

# output ---> 
# 76
# 100


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# create a class that describes a bike
    # bikes should have the attributes of model, number of wheels, and current speed 
        # use the attribute accessor along with initialize to make the code dynamic enough to make multiple bikes 
# use the default parameters for the given attributes
# create a method that spits out the data from the bike  
    # use string interpolation to add the info to the string bike_info 

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bikes 
    attr_accessor :model, :wheels, :current_speed
        def initialize model, wheels, speed
            @model = model 
            @wheels = 2
            @current_speed = 0
        end
    
        def bike_info
            return "Your #{model} bicycle, that has #{wheels} wheels, is going #{current_speed} mph."
        end

    end
    
solEclipse = Bikes.new 'Sol Eclipse', '2', '0'
p solEclipse.bike_info

# output ---> "Your Sol Eclipse bicycle, that has 2 wheels, is going 0 mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# ***** I could not get this code to work
    # ***** I keep getting variations of the error: 
        # ruby-challenges.rb:106:in `pedal_faster': wrong number of arguments (given 1, expected 0) (ArgumentError)
	    # from ruby-challenges.rb:127:in `<main>' 

# add a pedal faster and a brake method to the class Bikes
    # the bike speed cannot be negative 
    # use a loop to keep the bike braking until it reaches 0 
# use the given data to spit out the given expected output 
 
class Bikes 
    attr_accessor :model, :wheels, :current_speed
        def initialize model, wheels, speed
            @model = model 
            @wheels = 2
            @current_speed = 0
        end
    
        def bike_info
            return "Your #{model} bicycle, that has #{wheels} wheels, is going #{current_speed} mph."
        end
        def pedal_faster
            current_speed = current_speed + 10
        end

        def brake
            if current_speed > 0
               then current_speed 
            end
        end 
end

solEclipse = Bikes.new 'Sol Eclipse', '2', '0'
p solEclipse.bike_info

 # Expected output example: my_bike.pedal_faster(10) => 10
 # Expected output example: my_bike.pedal_faster(18) => 28
 # Expected output example: my_bike.brake(5) => 23
 # Expected output example: my_bike.brake(25) => 0

 p solEclipse.pedal_faster(10)
 p solEclipse.pedal_faster(18)
 p solEclipse.brake(5)
 p solEclipse.brake(25)
