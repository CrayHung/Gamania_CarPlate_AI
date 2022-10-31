echo "*** Clear all file in ../../gamania-cms/src/main/resources/static ***"
rm -rf ../../gamania-cms/src/main/resources/static/*
npm run build && cp -r build/* ../../gamania-cms/src/main/resources/static
echo "*** Copy all files from build to ../../gamania-cms/src/main/resources/static ***"