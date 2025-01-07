```javascript
function transferOwnership(newOwner) {
  // Check if the new owner address is valid
  require(newOwner != address(0), "New owner address cannot be zero");

  // Transfer ownership
  owner = newOwner;
}
```