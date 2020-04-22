# Personal website 👨‍💻

This is the code behind my personal website, which can be found by [clicking here](https://jason-wong.netlify.com/).

[Objective](#Objective) | [Running the program](#running_the_program)

## Objective

Build a website to apply the things I have learnt in React, and give a snapshot of my developer profile.

## <a name="running_the_program">Running the program</a>

### Setup
```
$ git clone https://github.com/jasylwong/bank_tech_test.git
$ cd bank_tech_test
```

### Testing, code coverage, and code style
```
$ bundle
$ rspec # All tests passing, coverage: 100%
$ rubocop # No offenses
```

### Example usage in irb
```
$ irb
> require './lib/load'
 => true 
> account = Account.new
 => #<Account:0x00007fe10c83f780> 
> account.deposit(350)
 => "Deposit of 350 made. Balance: 350." 
> account.withdraw(200)
 => "Withdrawal of 200 made. Balance: 150." 
> account.balance
 => 150.0 
> statement = Statement.new(account)
 => #<Statement:0x00007fe10b8a3f38> 
> print statement.display
date || credit || debit || balance
03/24/20 || || 200.00 || 150.00
03/24/20 || 350.00 || || 350.00
```
