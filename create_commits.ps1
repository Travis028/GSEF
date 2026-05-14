$files = git status -s | ForEach-Object { $_.Substring(3) }
$count = 0
foreach ($file in $files) {
    if ($count -ge 25) { break }
    if ($file -match 'create_commits.ps1') { continue }
    
    # Add file
    git add $file
    
    # Get base name for commit message
    $basename = Split-Path $file -Leaf
    git commit -m "Update $basename features and documentation"
    
    $count++
}
Write-Host "Created $count commits!"
