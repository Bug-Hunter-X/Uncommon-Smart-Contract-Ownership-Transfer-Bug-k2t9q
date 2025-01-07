```javascript
function transferOwnership(newOwner) {
  // Check if the new owner address is valid and not a contract address
  require(newOwner != address(0) && !isContract(newOwner), "Invalid new owner address");

  // Transfer ownership
  owner = newOwner;
}

function isContract(addr) {
  uint size;
  assembly {
    size := extcodesize(addr)
  }
  return size > 0;
}
```