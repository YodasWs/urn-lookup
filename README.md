urn-lookup
==========

A general purpose URN resolver. Instead of translating URNs into HTTP URLs to contact the resolver, I think we should use Gopher, but in a way similar to how DNS resolves domain names. (Plus you have to love the pun: Gopher is our URN gofer.)

For known URN schemes, we can redirect the client to the appropriate HTTP URN resolver.

For unknown URN schemes, like the DNS, we should ask another Gopher URN resolver.

## References
http://stackoverflow.com/questions/5476121/using-dns-as-a-urn-resolver
http://en.wikipedia.org/wiki/Info_URI_scheme
http://en.wikipedia.org/wiki/Digital_object_identifier
http://en.wikipedia.org/wiki/Uniform_resource_name
http://www.nationallibrary.fi/publishers/urn.html
http://en.wikipedia.org/wiki/URI_scheme
http://en.wikipedia.org/wiki/URI
