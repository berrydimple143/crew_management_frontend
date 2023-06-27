import AdminLayout from '../../components/layouts/AdminLayout';
import DefaultCard from '../../components/cards/default';
import * as cookie from 'cookie';
import { countDocuments, countCrews } from '../../services/counter';
import React, { useState, useEffect } from "react";

export async function getServerSideProps({ req }) {
  const cookieData = cookie.parse(req.headers.cookie || '');
  const { document_count } = await countDocuments(cookieData.token);
  const { crew_count } = await countCrews(cookieData.token);

  return {
    props: { info: cookieData, document_count, crew_count },
  }
}

export default function Admin({ info, document_count, crew_count })
{
    useEffect(() => {
        console.log(document_count);
    }, []);
    return (
        <AdminLayout title="Crew Management Administration Panel" chosenMenu="1">
            <DefaultCard document_count={document_count} crew_count={crew_count} />
        </AdminLayout>
    );
}
