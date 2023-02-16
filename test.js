/*
map of aspirations, key: aspiration | value: score
    key with the highest value will be the chosen aspiration
    getAspiration method, compare values finding the max
map of traits, key: trait | value: score
    top 3 keys with the highest values will be chosen
    getTraits method, return 3 traits

we want to check the answer chosen:
    *1) look if that answer has an aspiration linked to it, 
    if so, we increment that aspiration
    *2) check what traits are linked to the answer, 
    look for the traits weight and add that to the trait's value.
    *3) look for conflict, decrement that traits value


*/