# def hi(name)
# puts "Hello #{name.capitalize}!"
# end 
# hi("hannah")

# def greeting
#     puts "Please type your name:"
#     name = gets.chomp
#     puts "Your name is #{name}!"
# end
# greeting 

puts "What's your name? "
name=gets.chomp
puts "Hello " + name +"! Let's start counting!"
puts "\n" 

# x=0
# until x>10
#   puts x, "\n"
#   x+=1
# end

# x=1
puts "Enter a number: "
num=gets.to_i
# until x>num do
#   puts x
#   x+=1
# end

num.times do |count|
  puts count+1
end

# for x in (1..5) do
#   puts x
# end