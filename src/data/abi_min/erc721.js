export default ["constructor(address _ownerAddr, string _name, string _symbol, address _dataStoreAddr, string _baseURI)","event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)","event ApprovalForAll(address indexed owner, address indexed operator, bool approved)","event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)","event MetadataUpdate(uint256 _tokenId)","event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)","event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)","function _dataStore() view returns (address)","function approve(address to, uint256 tokenId)","function balanceOf(address owner) view returns (uint256)","function collectionUri() view returns (string)","function contractURI() view returns (string)","function getApproved(uint256 tokenId) view returns (address)","function getCollectionContract() view returns (address)","function getDappContract() view returns (address)","function isApprovedForAll(address owner, address operator) view returns (bool)","function mint(address _to, string _uri)","function mint(string _uri)","function mintWithRoyalty(address _to, string _uri, uint256 _royalty)","function name() view returns (string)","function owner() view returns (address)","function ownerOf(uint256 tokenId) view returns (address)","function royaltyInfo(uint256 _tokenId, uint256 _salePrice) view returns (address receiver, uint256 royaltyAmount)","function safeTransferFrom(address from, address to, uint256 tokenId)","function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)","function setApprovalForAll(address operator, bool approved)","function setRoyalty(uint256 _royaltyBps, address _receiver)","function setRoyaltyWithTokenId(uint256 _tokenId, uint256 _valueBps, address _receiver)","function supportsInterface(bytes4 interfaceId) view returns (bool)","function symbol() view returns (string)","function tokenByIndex(uint256 index) view returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)","function tokenURI(uint256 tokenId) view returns (string)","function totalSupply() view returns (uint256)","function transferFrom(address from, address to, uint256 tokenId)","function transferOwnership(address newOwner)"]