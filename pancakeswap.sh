#!/bin/bash

# Set the start and end dates
start_date=1714521600  # May 1, 2024
end_date=1722384000    # August 8, 2024

# Create a log file
log_file="pancakeswap_test_results_may_to_aug_2024.log"

# Create a CSV file
csv_file="pancakeswap_volume_data_may_to_aug_2024.csv"

# Clear the log file if it exists
> $log_file

# Create/clear the CSV file and add header
echo "Date,Timestamp,Volume" > $csv_file

# Function to convert timestamp to date string (works on both Linux and Mac)
timestamp_to_date() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        date -r $1 +"%Y-%m-%d"
    else
        # Linux
        date -d @$1 +"%Y-%m-%d"
    fi
}

# Loop through each day
current_date=$start_date
while [ $current_date -le $end_date ]
do
    date_str=$(timestamp_to_date $current_date)
    echo "Running test for timestamp: $current_date ($date_str)" | tee -a $log_file
    
    # Run the test and capture the output
    output=$(yarn test protocols pancakeswap $current_date 2>&1)
    
    # Save full output to log file
    echo "$output" >> $log_file
    echo "----------------------------------------" >> $log_file
    
    # Extract volume data and add to CSV
    volume=$(echo "$output" | grep -oP '(?<=dailyVolume": )[^,}]+' | head -n 1)
    if [ ! -z "$volume" ]; then
        echo "$date_str,$current_date,$volume" >> $csv_file
    else
        echo "No volume data found for $date_str" | tee -a $log_file
    fi
    
    # Increment the date by one day (86400 seconds)
    current_date=$((current_date + 86400))
    
    # Optional: Add a delay to avoid rate limiting
    sleep 2
done

echo "All tests completed. Results are in $log_file and $csv_file"